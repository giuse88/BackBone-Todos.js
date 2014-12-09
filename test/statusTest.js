var server = require("./lib/server");
var expect = require("chai").expect;

describe("Status", function() {
  beforeEach(function() {
    return server.start();
  });

  afterEach(function() {
    return server.stop();
  });

  describe("when you request the service status", function() {
    beforeEach(function() {
      return server.status();
    });

    it("should return a 200", function() {
      expect(server.res.statusCode).to.equal(200);
    });

    it("should return the text OK", function () {
      expect(server.res.body).to.equal("service is alive");
    });
  });

});