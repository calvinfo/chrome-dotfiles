SRC= $(wildcard lib/*)
REPORTER = dot

all: test build

test:
	@NODE_ENV=test ./node_modules/.bin/mocha -R $(REPORTER)

build: components $(SRC)
	@component build --standalone chrome-dotfiles
	@component build --standalone chrome-dotfiles-popup

components: component.json
	@component install

clean:
	rm -fr build components chrome-dotfiles.pem chrome-dotfiles.crx
chrome-dotfiles.crx: build
	@crxmake --pack-extension=.

.PHONY: test clean
