#!/bin/bash
#while read line; do export "$line";
#done < api.env
while IFS= read -r line
do
  echo "$line"
  export "$line"
done < server.env