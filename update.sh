#!/bin/bash

REPO_DIR="scip-upstream"

# Check if the repository directory exists
if [ ! -d "$REPO_DIR" ]; then
  # Clone the repository if it doesn't exist
  git clone https://github.com/sourcegraph/scip.git "$REPO_DIR"
  cd "$REPO_DIR" || exit
fi

git pull
git rev-parse HEAD > ../COMMIT
cp LICENSE ../LICENSE
cp -r bindings/typescript/* ../
