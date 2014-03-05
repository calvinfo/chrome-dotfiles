module.exports = GistInjector;

/**
 * Check our list of gists and apply the relevant ones
 *
 * @params gistList - gistList object that represents all our gists
 */

function GistInjector(gistList, inject) {
  return function(tabId, changeInfo, tab){
    if (changeInfo.status != 'complete' || !tab.active) { return false }

    var gists = _matchingGists(gistList.all(), tab.url)
    gists.forEach(function(gist){
      inject(tabId, {code: gist.content})
    })
  }
}

var _matchingGists = function(gistList, url){
  return gistList.filter(function(gist){
    var regex = new RegExp(gist.urlRegex)
    return url.match(regex)
  })
}
