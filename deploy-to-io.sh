#!/bin/bash
set -x -e

cd $HOME

# https://github.com/antbelliard/RPG-sample-io.git
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_IO_REPONAME.git -b master public

cp RPG-sample/build/* public/

cd public

git config --global user.email $CIRCLE_PROJECT_EMAIL
git config --global user.name $CIRCLE_PROJECT_USERNAME
git add .
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin master