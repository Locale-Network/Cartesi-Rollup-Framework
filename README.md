# Cartesi Rollups example for LocalLending

## how to run cartesi rollup machine
cd sqlite
docker buildx bake --load
docker compose -f ../docker-compose.yml -f ./docker-compose.override.yml up