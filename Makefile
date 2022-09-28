SERVICE:= vue


help:
	@echo cat Makefile

################# fooks ################# 
dir-fook:
	@make --directory $(path) $(target)

################# env ################# 
.PHONY: up
up:
	docker-compose up

.PHONY: up/d
up/d:
	docker-compose up -d
	docker exec -it $(SERVICE) /bin/bash

.PHONY: up/re
up/re:
	docker-compose up -d --build
	docker exec -it $(SERVICE) /bin/bash

.PHONY: stop
stop:
	docker-compose stop

.PHONY: down
down:
	docker-compose down

.PHONY: rm
rm: 
	docker-compose down --rmi all --volumes --remove-orphans

.PHONY: logs
logs:
	docker-compose logs -f
