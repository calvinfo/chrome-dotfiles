var should = require('should'),
    Injector = require('../lib/gistlist')

describe("Injector", function() {
  describe('#scriptUrl', function() {

    it("adds raw if we need it", function() {
      var url = "https://gist.github.com/nottombrown/10dcdfdac7a226971304";
      var injector = new Injector(url);
      injector.scriptUrl.should.equal(url + "/raw");
    });

    it("doesn't add raw if we don't need it", function() {
      var url = "https://gist.github.com/nottombrown/10dcdfdac7a226971304/raw";
      var injector = new Injector(url);
      injector.scriptUrl.should.equal(url);
    });

    it("returns false when invalid", function() {
      var url = "http://xkcd.com/1326/";
      injector = new Injector(url);
      injector.scriptUrl.should.equal(false);
    });
  });
});
