var should = require('should'),
    Injector = require('../lib/injector')

describe("Injector", function() {
  describe('#cleanGistUrl', function() {

    it("adds raw if we need it", function() {
      var url = "https://gist.github.com/nottombrown/10dcdfdac7a226971304";
      Injector.cleanGistUrl(url).should.equal(url + "/raw");
    });

    it("doesn't add raw if we don't need it", function() {
      var url = "https://gist.github.com/nottombrown/10dcdfdac7a226971304/raw";
      Injector.cleanGistUrl(url).should.equal(url);
    });

    it("returns false when invalid", function() {
      var url = "http://xkcd.com/1326/";
      Injector.cleanGistUrl(url).should.equal(false);
    });
  });
});