(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Setup a background script for our Chrome App.
 *
 */

var GistObserver = require('./gist_observer')
var gistCallback = function(gist_url){
  console.log(gist_url);
}

var observer = new GistObserver(gistCallback)

},{"./gist_observer":2}],2:[function(require,module,exports){
module.exports = GistObserver;

/**
 * Load a gist from a page and inject it onto the page
 *
 * @params gistCallback - function that expects and processes a gist URL
 */

function GistObserver(gistCallback) {
  _setupListener(gistCallback);
}

var _setupListener = function(gistCallback){
  chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
      if(_ignoreRequest(details.type)) return false;

      var gistHeader = details.responseHeaders.filter(function(o){return o.name === "X-Gist-Url"})[0];
      if(gistHeader){
        gistCallback(gistHeader.value);
      } else {
        console.log("No gist header found")
      }
    },
    {urls: ["<all_urls>"]}, ["responseHeaders"]
  );
}


var _ignoreRequest = function(requestType){
  return (requestType.match(/main_frame|xmlhttprequest/) == null)  // Github uses pjax
}

},{}]},{},[1])