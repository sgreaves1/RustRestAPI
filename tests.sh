#!/bin/sh

exitcode=0

echo "Entered the tests.sh script"

docker-compose --project-name rustrestapitest up -d

sleep 5

docker-compose --project-name rustrestapitest up --exit-code-from rust-rest-api rust-rest-api
exitcode=$?

docker-compose --project-name rustrestapitest stop
docker-compose --project-name rustrestapitest rm -f

docker volume prune -f

if [[ ${exitcode} > 0 ]]; then
echo "Error running tests"
fi
exit ${exitcode}