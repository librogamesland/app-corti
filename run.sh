#!/bin/bash
docker run -it --rm -p 8900:8900 -p 35729:35729 \
  -v magecache:/tmp/cache  \
  -v `pwd`:/tmp/app webratio/nodejs-with-android-sdk:14_sdk-30 \
  /bin/bash -c '/bin/bash /tmp/app/src/scripts/docker.sh; chown -hR '"$(id -u ${USER}):$(id -g ${USER})"' /tmp/app'