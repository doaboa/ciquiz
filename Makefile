BIN = ./node_modules/.bin
build:
	@$(BIN)/webpack

serve:
	@$(BIN)/serve public

watch:
	@$(BIN)/webpack --watch
