docker-compose build kerberos rest windows
docker-compose up -d kerberos
docker-compose up -d rest
docker-compose run --rm windows "/run.ps1"
$exitcode=$LASTEXITCODE
docker-compose down
exit $exitcode
