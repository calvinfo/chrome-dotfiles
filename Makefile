SRC= $(wildcard lib/*)
REPORTER = dot

all: build test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha -R $(REPORTER)

build: components $(SRC)
	@component build --standalone chrome-dotfiles

components: component.json
	@component install

clean:
	rm -rf build components chrome-dotfiles.pem chrome-dotfiles.crx

chrome-dotfiles.crx: build
	@crxmake --pack-extension=.

.PHONY: test clean build
