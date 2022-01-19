include .env

.PHONY: install

install:
	yarn install

.PHONY: dev

dev:
	yarn dev

.PHONY: seed

seed:
	yarn seed

.PHONY: build

build:
	yarn build

.PHONY: test

test:
	yarn test

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f
