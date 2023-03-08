#!/bin/bash

# rm old builds
rm -rf dist/
rm -rf ../resources/
rm -rf ../extension.tar

# lets build
yarn build

# setup for psuh
cp -rf dist/* ../

# git commit
git add