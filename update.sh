#!/bin/bash

REPO_DIR="scip-upstream"

if [ ! -d "$REPO_DIR" ]; then
  git clone https://github.com/sourcegraph/scip.git "$REPO_DIR"
fi

cd "$REPO_DIR" || exit
git pull
git rev-parse HEAD > ../COMMIT

cp LICENSE ../LICENSE
cp -r bindings/typescript/* ../

jq '. + { "main": "./scip" }' bindings/typescript/package.json > ../package.json

cd ..
npm i

jq '.compilerOptions *= { "declaration": true }' tsconfig.json > tsconfig.tmp.json
mv tsconfig.tmp.json tsconfig.json
npx tsc
rm scip.ts
