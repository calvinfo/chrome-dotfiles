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
