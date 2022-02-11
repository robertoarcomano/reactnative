#!/bin/bash
# Constants
N=100 # Max num of pages to be created
FILE=components/pages.json

echo "[" > $FILE
for i in $(seq 1 $N); do
  IMAGE=$(convert \
      -size 220x220 \
      xc:lightgreen \
      -font Bookman-DemiItalic \
      -pointsize 30 \
      -fill black \
      -gravity center \
      -draw "text 0,0 '$i'" \
      jpeg:- | base64 -w 0)
  echo "{ \"text\": \"text_$i\", \"image\": \"$IMAGE\" }"
  if [ "$i" != "$N" ]; then
    echo ","
  fi
done >> $FILE
echo "]" >> $FILE
