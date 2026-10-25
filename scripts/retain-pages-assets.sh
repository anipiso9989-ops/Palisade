#!/usr/bin/env bash
set -euo pipefail

# GitHub Pages can cache HTML across deployments. Keep recent hashed resources so
# that cached documents can still load their matching styles and scripts.
asset_temp=$(mktemp -d)
trap 'rm -rf "$asset_temp"' EXIT
prior_runs=$(gh api "repos/${GITHUB_REPOSITORY}/actions/workflows/palisade-pages.yml/runs?branch=v5&status=success&per_page=5" --jq '.workflow_runs[].id')
for run_id in $prior_runs; do
  run_dir="$asset_temp/$run_id"
  mkdir -p "$run_dir"
  if gh run download "$run_id" --repo "$GITHUB_REPOSITORY" --name github-pages --dir "$run_dir"; then
    python3 scripts/retain-pages-assets.py "$run_dir/artifact.tar" public
  else
    echo "No retained Pages artifact for run $run_id; skipping."
  fi
done
