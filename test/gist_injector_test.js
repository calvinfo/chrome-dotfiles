var should = require('should'),
    GistInjector = require('../lib/gist_injector')

describe("GistInjector", function() {
  describe('#new', function() {
    it("is a function", function() {
      var injector = new GistInjector();
      injector.should.be.type("function");
    });
    // TODO: (alex) Improve mocha-fu and properly spec the behaviour of the injector function
  });
});
