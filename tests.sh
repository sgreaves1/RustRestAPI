#!/bin/sh

exitcode=0

echo "Entered the tests.sh script"

echo "Docker compose up"
docker-compose --project-name rustrestapitest up -d

sleep 5

echo "Docker compose exitcode"
docker-compose --project-name rustrestapitest up --exit-code-from rust-rest-api rust-rest-api
exitcode=$?

echo "Docker Stop"
docker-compose --project-name rustrestapitest stop
echo "Docker Remove"
docker-compose --project-name rustrestapitest rm -f

echo "Docker volume prune"
docker volume prune -f

if [[ ${exitcode} > 0 ]]; then
echo "Error running tests"
fi
exit ${exitcode}