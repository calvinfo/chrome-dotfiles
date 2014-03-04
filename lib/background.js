/**
 * Setup a background script for our Chrome App.
 *
 */

var GistObserver = require('./gist_observer')
var gistCallback = function(gist_url){
  console.log(gist_url);
}
var observer = new GistObserver(gistCallback)
