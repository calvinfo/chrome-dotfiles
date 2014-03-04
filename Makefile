SRC= $(wildcard lib/*)
REPORTER = dot

all: clean build test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha -R $(REPORTER)

build: components $(SRC)
	@component build --standalone chrome-dotfiles
	make -f popup/Makefile build

components: component.json
	@component install

clean:
	rm -rf build components chrome-dotfiles.pem chrome-dotfiles.crx
	make -f popup/Makefile clean

chrome-dotfiles.crx: build
	@crxmake --pack-extension=.

.PHONY: test clean
