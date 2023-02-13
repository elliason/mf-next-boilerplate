include .env

CURRENT_UID=`id -u`

init:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(APP_NODE_IMAGE) bash -c "yarn";

start:
	./bin/start

stop:
	./bin/stop

restart:
	./bin/restart

run-node:
	docker run -it --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(APP_NODE_IMAGE) bash;

clear-node-modules:
	docker run --rm -v `pwd`/application:/var/www/html -w /var/www/html/ $(APP_NODE_IMAGE) bash -c "yarn clear-modules";

###########################################
######### CODE QUALITY ###########
###########################################
lint-fix:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(APP_NODE_IMAGE) bash -c "yarn lint:fix";

lint:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(APP_NODE_IMAGE) bash -c "yarn lint";

format:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(APP_NODE_IMAGE) bash -c "yarn format";

test:
	docker run --rm -v `pwd`:/var/www/html -w /var/www/html/application -u $(CURRENT_UID) $(APP_NODE_IMAGE) bash -c "yarn test";

###########################################
######### DOCUMENTATION SECTION ###########
###########################################

SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SOURCEDIR     = _docs
BUILDDIR      = _docs/_build

ALLSPHINXOPTS = -d $(BUILDDIR)/doctrees $(PAPEROPT_$(PAPER)) $(SPHINXOPTS) $(SOURCEDIR)

docs-clean:
	docker run --rm -v `pwd`/:/var/www/html -w /var/www/html docker.mediafactory.dev/php/php:7.4-fpm-buster-dev bash -c "rm -rf $(BUILDDIR)/*"

docs-html:
	docker run --rm -v `pwd`/:/var/www/html -w /var/www/html docker.mediafactory.dev/php/php:7.4-fpm-buster-dev bash -c "$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html"
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."

docs-changes:
	docker run --rm -v `pwd`/:/var/www/html -w /var/www/html docker.mediafactory.dev/php/php:7.4-fpm-buster-dev bash -c "$(SPHINXBUILD) -b changes $(ALLSPHINXOPTS) $(BUILDDIR)/changes"
	@echo
	@echo "The overview file is in $(BUILDDIR)/changes."

docs-linkcheck:
	docker run --rm -v `pwd`/:/var/www/html -w /var/www/html docker.mediafactory.dev/php/php:7.4-fpm-buster-dev bash -c "$(SPHINXBUILD) -b linkcheck $(ALLSPHINXOPTS) $(BUILDDIR)/linkcheck"
	@echo
	@echo "Link check complete; look for any errors in the above output " \
	      "or in $(BUILDDIR)/linkcheck/output.txt."
