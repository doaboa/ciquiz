BIN = ./node_modules/.bin
build:
	@npm install
	@$(BIN)/webpack

serve:
	@$(BIN)/serve public

watch:
	@$(BIN)/webpack --watch
