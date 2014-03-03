(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Injector = require('./injector')

gist = "https://gist.github.com/nottombrown/10dcdfdac7a226971304"
var injector = new Injector(gist)
injector.inject()
},{"./injector":2}],2:[function(require,module,exports){
module.exports = Injector;

/**
 * Load a gist from a page and inject it onto the page
 *
 * @param {gistUrl} any valid gist url
 * @api public
 */

function Injector(gistUrl) {

  this.scriptUrl = this.cleanGistUrl(gistUrl)
}

/**
 * Injects the scriptUrl into he current page
 */
Injector.prototype.inject = function () {
  var scriptEl = document.createElement("script");
  scriptEl.type = "text/javascript";
  scriptEl.src = this.scriptUrl;
  document.body.appendChild(scriptEl);
}


/**
 * Takes a gist url and converts it into a valid raw url.
 * Returns null if the url is invalid
 *
 * @param {gistUrl} any valid gist url
 * @api public
 */

Injector.prototype.cleanGistUrl = function (gistUrl) {
  if ( gistUrl.match(/gist.github.com/) ) {
    return _rawGistUrl(gistUrl)
  } else {
    return false
  }
}

_rawGistUrl = function (gistUrl) {
  gistUrl = gistUrl.replace(/\/$/, "")
  if ( gistUrl.match(/raw$/) ) {
    return gistUrl
  } else {
    return gistUrl + "/raw"
  }
}
},{}]},{},[1])