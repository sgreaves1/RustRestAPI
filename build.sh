#!/bin/sh

error() {
    echo ">>>>>> Failed to build <<<<<<"
    echo ""

    exit 1
}

cleanup() {
    cd $CURDIR
    docker volume prune -f
}

trap error ERR
trap cleanup EXIT

echo
echo =============================================================================
echo Building Rust Rest API
echo =============================================================================
echo

VERSION=`cat VERSION`
CURDIR=`pwd`

docker run --rm \
       -t \
        -v "${CURDIR}:/app" \
        -v "${HOME}/.ssh:/root/.ssh" \
        --workdir /app \
        node:dubnium-alpine /bin/sh -c \
        "apk update; apk upgrade; apk add git; apk add openssh; npm install"

docker volume prune -f