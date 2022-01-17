include .env

.PHONY: dev

dev:
	yarn dev

.PHONY: mig

mig:
	yarn mig

.PHONY: migration

migration:
	yarn typeorm migration:run

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f
