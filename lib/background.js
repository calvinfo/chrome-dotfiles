/**
 * Setup our GistList!
 *
 */
var GistList = require('./gist_list');
var gistList = new GistList();


/**
 * Setup a background script for our Chrome App.
 *
 */
var GistObserver = require('./gist_observer');
var gistCallback = function(gist_url){
  console.log(gist_url);
}
var observer = new GistObserver(gistCallback);


/**
 * Setup the injector.
 *
 */
var GistInjector = require('./gist_injector');
var injector = new GistInjector(gistList);
