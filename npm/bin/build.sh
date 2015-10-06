#!/bin/bash
rm -rf ./app/dist
mkdir -p ./app/dist/js
mkdir -p ./app/dist/css
mkdir -p ./app/dist/images
csso ./app/dev/css/styles.css ./app/dist/css/styles.min.css
uglifyjs ./app/dev/js/main.js \
         -o ./app/dist/js/main.min.js \
         --source-map ./app/dist/js/main.js.map \
         --source-map-root http://martshaw.com/js \
         -c drop_console=true -m
cp -R ./app/dev/images/* ./app/dist/images/.
cp ./app/dev/index.html ./app/dist/index.html


