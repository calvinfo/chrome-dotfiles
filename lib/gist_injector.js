module.exports = GistInjector;

/**
 * Check our list of gists and apply the relevant ones
 *
 * @params gistList - gistList object that represents all our gists
 */

function GistInjector(gistList) {
  _setupInjector(gistList);
}

var _setupInjector = function(gistList){
  chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status != 'complete' || !tab.active) {
      return false
    }

    var gists = _matchingGists(gistList.all(), tab.url)
    gists.forEach(function(gist){
      chrome.tabs.executeScript(tabId, {code: gist.content})
    })
  })
}

var _matchingGists = function(gistList, url){
  return gistList.filter(function(gist){
    var regex = new RegExp(gist.urlRegex)
    return url.match(regex)
  })
}
