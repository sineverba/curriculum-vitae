include .env

IMAGE_NAME=sineverba
CONTAINER_NAME=curriculum-vitae
APP_VERSION=0.2.1

sonar:
	docker-compose up sonarscanner

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix

buildimage:
	docker build --tag $(IMAGE_NAME)/${CONTAINER_NAME}:$(APP_VERSION) --tag $(IMAGE_NAME)/${CONTAINER_NAME}:latest .

spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME)/${CONTAINER_NAME}:$(APP_VERSION)

deploy:
	docker push $(IMAGE_NAME)/${CONTAINER_NAME}:latest

destroy:
	docker image rm $(IMAGE_NAME)/${CONTAINER_NAME}:$(APP_VERSION) $(IMAGE_NAME)/${CONTAINER_NAME}:latest