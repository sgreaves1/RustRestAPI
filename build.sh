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

if [ -z "$GO_PIPELINE_COUNTER" ]; then
    export GO_PIPELINE_COUNTER=0
fi

if [ -z "$GO_STAGE_COUNTER" ]; then
    export GO_STAGE_COUNTER=0
fi

echo
echo =============================================================================
echo Building Rust Rest API, VERSION = $VERSION.$GO_PIPELINE_COUNTER.$GO_STAGE_COUNTER
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

sudo chown -R go:go .