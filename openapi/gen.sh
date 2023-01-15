curl https://raw.githubusercontent.com/daclimb/gym-service/main/openapi/openapi.yaml > openapi.yaml

curl https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/6.2.1/openapi-generator-cli-6.2.1.jar -o openapi-generator-cli.jar

java -jar openapi-generator-cli.jar generate -g typescript-axios -i openapi.yaml -o out --api-package api --model-package model \
-p withSeparateModelsAndApi=true