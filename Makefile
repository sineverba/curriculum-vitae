include .env

IMAGE_NAME=sineverba
CONTAINER_NAME=curriculum-vitae
APP_VERSION=1.2.0-dev
SONARSCANNER_VERSION=4.8.0
BUILDX_VERSION=0.10.0
BINFMT_VERSION=qemu-v7.0.0-28

sonar:
	docker run --rm -it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_LOGIN=$(SONAR_LOGIN) \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix

fixnodesass:
	npm rebuild node-sass

build:
	docker build --tag $(IMAGE_NAME):$(APP_VERSION) .

test:
	docker run --rm -it --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "Alpine Linux"
	
spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION)

destroy:
	docker image rm $(IMAGE_NAME):$(APP_VERSION)