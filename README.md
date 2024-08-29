# Cartesi Rollups example for LocalLending

## how to run cartesi rollup machine
### cd sqlite
docker buildx bake --load

### running
docker compose -f ../docker-compose.yml -f ./docker-compose.override.yml up

### shut down
docker compose -f ../docker-compose.yml -f ./docker-compose.override.yml down -v

### run in host mode
docker compose -f ../docker-compose.yml -f ./docker-compose.override.yml -f ../docker-compose-host.yml up