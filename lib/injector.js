module.exports = Injector;

gist = "https://gist.github.com/nottombrown/10dcdfdac7a226971304"

console.log("perfect")

/**
 * Load a gist from a page and inject it onto the page
 *
 * @param {gistUrl} any valid gist url
 * @api public
 */

function Injector(gistUrl) {

  this.gistUrl = this.prototype.cleanGistUrl(gistUrl)
}


/**
 * Takes a gist url and converts it into a valid raw url.
 * Returns null if the url is invalid
 *
 * @param {gistUrl} any valid gist url
 * @api public
 */

Injector.cleanGistUrl = function (gistUrl) {
  if ( gistUrl.match(/gist.github.com/) ) {
    return this.rawGistUrl(gistUrl)
  } else {
    return false
  }
}

Injector.rawGistUrl = function (gistUrl) {
  gistUrl = gistUrl.replace(/\/$/, "")
  if ( gistUrl.match(/raw$/) ) {
    return gistUrl
  } else {
    return gistUrl + "/raw"
  }
}
