SRC= $(popup/* popup/lib/*)

all: clean build

build: components $(SRC)
	@component build --standalone chrome-dotfilez/popup

components: component.json
	@component install

clean:
	rm -rf build components

.PHONY: clean