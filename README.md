# Chrome Dotfiles

[![Build Status](https://travis-ci.org/Grouper/lobstertrap.png)](https://travis-ci.org/nottombrown/chrome-dotfiles)

A chrome plugin that lets you run code that you place into a gist whenever you visit a site that matches a regex.

# Setup

Install dependencies

```bash
npm install
```

If you'd like to run browserify and mocha directly from the command line, either install those modules globablly

```bash
npm install -g browserify mocha
```

or add ./node_modules/.bin/ to your PATH.

# Developing

Compile with

```bash
browserify lib/inject.js -o built.js
```

Run tests with

```bash
mocha
```

Use [Extensions-Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) (and set a keyboard shortcut) to speed things up
