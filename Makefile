build:
	yarn build && rm -rf docs && mkdir docs && mv dist/* docs/  && rm -rf dist