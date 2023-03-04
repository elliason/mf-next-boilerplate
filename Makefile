include .env

CURRENT_UID=`id -u`

init:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm install";

start:
	./bin/start --full=true
	make start-cms

stop:
	./bin/stop --full=true
	make stop-cms

restart:
	./bin/restart --full=true
	make restart-cms

start-web:
	./bin/start --web=true
	make start-cms

stop-web:
	./bin/stop --web=true
	make stop-cms

restart-web:
	./bin/restart --web=true
	make restart-cms

start-admin:
	./bin/start --admin=true

stop-admin:
	./bin/stop --admin=true

restart-admin:
	./bin/restart --admin=true

start-storybook:
	./bin/start --storybook=true

stop-storybook:
	./bin/stop --storybook=true

restart-storybook:
	./bin/restart --storybook=true

start-docs:
	./bin/start --docs=true

stop-docs:
	./bin/stop --docs=true

restart-docs:
	./bin/restart --docs=true

start-cms:
	./bin/start --cms=true

stop-cms:
	./bin/stop --cms=true

restart-cms:
	./bin/restart --cms=true

# UI is not included in full, can only run idependently
start-ui:
	./bin/start --ui=true

stop-ui:
	./bin/stop --ui=true

restart-ui:
	./bin/restart --ui=true

run-node:
	docker run -it --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash;

run-node-cms:
	docker run -it --rm -v `pwd`:/var/www/html -w /var/www/html/application/backends/cms -u $(CURRENT_UID) $(NODE_IMAGE) bash;

format:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm format";

lint:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm lint";

test:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(NODE_IMAGE) bash -c "pnpm test";
