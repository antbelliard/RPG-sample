#!/bin/bash
set -x -e
# https://github.com/antbelliard/RPG-sample-io.git
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git -b gh-pages public
cd examples/todomvc

cd ../..
mkdir -p public/todomvc
cp examples/todomvc/public/* public/todomvc
cd public
git config --global user.email $CIRCLE_PROJECT_EMAIL
git config --global user.name $CIRCLE_PROJECT_USERNAME
git add .
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin gh-pages