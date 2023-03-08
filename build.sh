#!/bin/bash

# rm old builds
rm -rf dist/
rm -rf ../resources/
rm -rf ../extension.tar

sleep 3

# lets build
cd ui
yarn build

# setup for psuh
cp -rf dist/* ../

# git commit
cd ..
git add *
git commit -m "updates"
git push
