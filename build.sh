#!/bin/bash

# rm old builds
rm -rf ui/dist/
rm -rf resources/
rm -f ./extension.tar

# lets build
cd ui
yarn build

# setup for psuh
cp -rf ui/dist/* ./

# git commit
cd ..
git add *
git commit -m "updates"
git push
