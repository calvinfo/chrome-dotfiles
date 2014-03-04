var should = require('should'),
    GistList = require('../lib/gist_list')

describe("GistList", function() {
  describe('#all', function() {
    it("is an array", function() {
      var list = new GistList()
      list.all().should.be.an.instanceOf(Array);
    });
    it("is an array of gist objects", function(){
      var list = new GistList()
      var gist = list.all()[0];
      gist.should.have.properties('urlRegex', 'type', 'content');
    });
  });
});
