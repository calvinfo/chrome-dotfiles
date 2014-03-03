# Chrome Dotfiles

[![Build Status](https://travis-ci.org/Grouper/lobstertrap.png)](https://travis-ci.org/nottombrown/chrome-dotfiles)

Customize your webapps. Dotfiles let you point to a gist file with javascript or css and have it run on pages that match the regex in the first line.


# Developing

Compile with

```bash
browserify lib/inject.js -o built.js
```

Run test with

```bash
mocha
```