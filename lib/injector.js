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