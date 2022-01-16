#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/thesamoanppprogrammer/PracticeVuejs.git master:gh-pages
cd -