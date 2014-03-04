SRC= $(wildcard lib/*)
REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha -R $(REPORTER)

build: components $(SRC)
	@component build --standalone chrome-dotfiles

components: component.json
	@component install

clean:
	rm -fr build components chrome-dotfiles.*

chrome-dotfiles.crx: build
	@crxmake --pack-extension=.

.PHONY: test clean