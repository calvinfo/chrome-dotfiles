var should = require('should'),
    gist_loader = require('../lib/injector')

describe('Load', function() {
  it("passes", function() {
    [1,2,3].indexOf(5).should.equal(-1);
  });
});
