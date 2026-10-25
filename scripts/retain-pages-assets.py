"""Copy only missing web resources from an earlier Pages artifact, never HTML."""
import json
import shutil
import sys
import tarfile
from pathlib import Path, PurePosixPath


def retain_assets(archive_path, output_dir):
    output = Path(output_dir)
    count = 0
    manifest = output / ".palisade-retained-assets.json"
    retained = set(json.loads(manifest.read_text())) if manifest.exists() else set()
    with tarfile.open(archive_path) as archive:
        # Do not carry assets that this older build itself inherited. This keeps
        # the history bounded to the native assets of the five requested builds.
        inherited = set()
        for member in archive.getmembers():
            if member.isfile() and str(PurePosixPath(member.name)) == manifest.name:
                with archive.extractfile(member) as source:
                    inherited = set(json.load(source))
        for member in archive.getmembers():
            name = PurePosixPath(member.name)
            if not member.isfile() or name.is_absolute() or ".." in name.parts:
                continue
            if name.suffix not in {".css", ".js", ".woff", ".woff2"}:
                continue
            if str(name) in inherited:
                continue
            target = output.joinpath(*name.parts)
            if target.exists():
                continue
            source = archive.extractfile(member)
            if source is None:
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            with source, target.open("wb") as destination:
                shutil.copyfileobj(source, destination)
            retained.add(str(name))
            count += 1
    output.mkdir(parents=True, exist_ok=True)
    manifest.write_text(json.dumps(sorted(retained)))
    return count


if __name__ == "__main__":
    print(f"Retained {retain_assets(sys.argv[1], sys.argv[2])} cached-page resources.")
