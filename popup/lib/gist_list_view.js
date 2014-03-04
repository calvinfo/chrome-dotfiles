var Backbone = require("backbone")

var GistListView = Backbone.Model.extend({
  render: function(){
    console.log("render");
  }
});

module.exports = GistListView;