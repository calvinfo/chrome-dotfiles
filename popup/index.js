var GistList = require("../lib/gist_list.js");

var GistListView = require("./lib/gist_list_view.js")

var gistListView = new GistListView({collection: GistList});
gistListView.render();
