module.exports = GistList;

/**
 * A repository of all gists
 *
 */

function GistList() {
}

GistList.prototype.all = function () {
  var list = [
    {
      urlRegex: ".",
      type: "js",
      content: "console.log('GistList makes you #winning')"
    }
  ]
  return list
}
