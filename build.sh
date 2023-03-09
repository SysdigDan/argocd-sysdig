#!/usr/bin/env bash

# rm old builds
rm -rf ./ui/dist/
rm -rf ./resources/
rm -f ./extension.tar

# lets build
cd ui
yarn build

# setup for push
cp -R ./dist/* ../
sleep 3

# # git commit
cd ..
git add *
git commit -m "updates"
git push
