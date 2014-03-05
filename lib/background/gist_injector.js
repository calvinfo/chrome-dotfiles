module.exports = GistInjector;

/**
 * Check our list of gists and apply the relevant ones
 *
 * @params gistList - gistList object that represents all our gists
 */

function GistInjector(gistList, jsInject) {
  return function(tabId, changeInfo, tab){
    if (changeInfo.status != 'complete' || !tab.active) { return false }

    var gists = _matchingGists(gistList.all(), tab.url)
    gists.forEach(function(gist){
      var code = gist.content
      if(gist.type === "css"){code = _afterLoadify(code)}
      jsInject(tabId, {code: code})
    })
  }
}

var _matchingGists = function(gistList, url){
  return gistList.filter(function(gist){
    var regex = new RegExp(gist.urlRegex)
    return url.match(regex)
  })
}

var _afterLoadify = function(css){
  var styleElement = document.createElement('style')
  styleElement.appendChild(document.createTextNode(css))
  return [
    "var styleElement = document.createElement('style');",
    "styleElement.appendChild(document.createTextNode('",css,"'));",
    "document.head.appendChild(styleElement);"
  ].join("")
}
