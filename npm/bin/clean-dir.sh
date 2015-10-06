#!/bin/bash
if [ "$(ls -A ./dist)" ]
  then
  echo "Not Empty"
  rm -r dist/*
else
  echo "Empty"
fi
