BIN = ./node_modules/.bin
SOURCES = ./*.js ./lib/*.js ./routes/*.js

.PHONY: start clean test deploy bootstrap 

start: 
	@$(BIN)/nodemon ./bin/www 

export-env: 
	@export NODE_ENV=test

test: export-env lint 
ifeq ($(ENV),CI)
	@$(BIN)/mocha -R mocha-jenkins-reporter $(UNIT_TESTS)
else
	@$(BIN)/mocha -R spec  
endif

lint:
ifeq ($(ENV),CI)
	@$(BIN)/jscs -r checkstyle  $(SOURCES)  > ./report/checkstyle-results.xml;
	@$(BIN)/jshint --reporter checkstyle $(SOURCES) > ./report/checkstyle-results.xml; 
else
	@$(BIN)/jscs $(SOURCES)
	@$(BIN)/jshint $(SOURCES) 
endif

clean: 
	@rm -rf reports;
	@mkdir reports;

deploy-staging:
	@bundle exec cap staging deploy

deploy-production:
	@bundle exec cap production deploy

restart-staging:
	@bundle exec cap staging deploy:restart

restart-production:
	@bundle exec cap production deploy:restart

bootstrap:
	@npm install;
	@bundle install