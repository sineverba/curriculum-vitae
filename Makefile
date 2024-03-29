include .env

IMAGE_NAME=registry.gitlab.com/cicdprojects/curriculum-vitae
CONTAINER_NAME=curriculum-vitae
APP_VERSION=1.11.0-dev
SONARSCANNER_VERSION=5.0.1
BUILDX_VERSION=0.12.0
BINFMT_VERSION=qemu-v7.0.0-28

initmsw:
	npx msw init public/ - save

sonar:
	docker run --rm -it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_LOGIN=$(SONAR_TOKEN) \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u -x msw
	npx update-browserslist-db@latest
	npm install
	npm audit fix

fixnodesass:
	npm rebuild node-sass

preparemulti:
	mkdir -vp ~/.docker/cli-plugins
	curl \
		-L \
		"https://github.com/docker/buildx/releases/download/v$(BUILDX_VERSION)/buildx-v$(BUILDX_VERSION).linux-amd64" \
		> \
		~/.docker/cli-plugins/docker-buildx
	chmod a+x ~/.docker/cli-plugins/docker-buildx
	docker buildx version
	docker run --rm --privileged tonistiigi/binfmt:$(BINFMT_VERSION) --install all
	docker buildx ls
	docker buildx rm multiarch
	docker buildx create --name multiarch --driver docker-container --use
	docker buildx inspect --bootstrap --builder multiarch

build:
	npm run build
	docker build \
		--tag $(IMAGE_NAME):$(APP_VERSION) \
		--file dockerfiles/production/build/docker/Dockerfile "."
	rm -r build

multi:
	preparemulti
	npm run build
	docker buildx build \
		--platform linux/arm64/v8,linux/amd64,linux/arm/v6,linux/arm/v7 \
		--tag $(IMAGE_NAME):$(APP_VERSION) \
		--push \
		--file dockerfiles/production/build/docker/Dockerfile "."
	rm -r build

test:
	docker run --rm -it --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "Alpine Linux v3.18"
	docker run --rm -it --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "3.18.5"
	
spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION)

destroy:
	docker image rm nginx:1.25.3-alpine3.18-slim
	docker image rm $(IMAGE_NAME):$(APP_VERSION)