var _ = require("underscore");
var Backbone = require("backbone");

var GistListView = Backbone.Model.extend({
  render: function(){
    this.collection

    _.each(this.collection.all, function(gist){
      console.log(gist)
    })
    console.log("WAT")
    return this;
  }
});

module.exports = GistListView;