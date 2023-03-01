include .env

CURRENT_UID=`id -u`

init:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm install";

start:
	./bin/start --full=true

stop:
	./bin/stop --full=true

restart:
	./bin/restart --full=true

start-web:
	./bin/start --web=true

stop-web:
	./bin/stop --web=true

restart-web:
	./bin/restart --web=true

start-storybook:
	./bin/start --storybook=true

stop-storybook:
	./bin/stop --storybook=true

restart-storybook:
	./bin/restart --storybook=true

# TODO: docs not working via docker
# start-docs:
# 	./bin/start --docs=true

# stop-docs:
# 	./bin/stop --docs=true

# restart-docs:
# 	./bin/restart --docs=true

run-node:
	docker run -it --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash;

format:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm format";

lint:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm lint";

test:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm test";
