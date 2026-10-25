import io
import json
import runpy
import tarfile
import tempfile
import unittest
from pathlib import Path

retain_assets = runpy.run_path(str(Path(__file__).with_name("retain-pages-assets.py")))["retain_assets"]


class RetainPagesAssetsTest(unittest.TestCase):
    def test_only_missing_native_resources_are_kept(self):
        with tempfile.TemporaryDirectory() as root:
            root = Path(root)
            output = root / "public"
            output.mkdir()
            (output / "index-current.css").write_text("current")
            archive = root / "artifact.tar"
            files = {
                "./index-old.css": "old style",
                "index-current.css": "must not overwrite",
                "static/resource-old.js": "old script",
                "static/fonts/font.woff2": "font",
                "progress/index.html": "must not copy stale HTML",
                "static/icon.png": "must not restore the logo",
                "../escape.js": "unsafe",
                "/absolute.js": "unsafe",
                "index-ancient.css": "inherited asset must expire",
                ".palisade-retained-assets.json": json.dumps(["index-ancient.css"]),
            }
            with tarfile.open(archive, "w") as dest:
                for name, content in files.items():
                    member = tarfile.TarInfo(name)
                    data = content.encode()
                    member.size = len(data)
                    dest.addfile(member, io.BytesIO(data))
                symlink = tarfile.TarInfo("symlink.js")
                symlink.type = tarfile.SYMTYPE
                symlink.linkname = "../escape.js"
                dest.addfile(symlink)
            self.assertEqual(retain_assets(archive, output), 3)
            self.assertEqual((output / "index-current.css").read_text(), "current")
            self.assertEqual((output / "index-old.css").read_text(), "old style")
            self.assertTrue((output / "static/resource-old.js").exists())
            for name in ["progress/index.html", "static/icon.png", "symlink.js", "absolute.js", "index-ancient.css"]:
                self.assertFalse((output / name).exists(), name)
            self.assertFalse((root / "escape.js").exists())
            self.assertEqual(retain_assets(archive, output), 0)
            self.assertEqual(len(json.loads((output / ".palisade-retained-assets.json").read_text())), 3)


if __name__ == "__main__":
    unittest.main()
