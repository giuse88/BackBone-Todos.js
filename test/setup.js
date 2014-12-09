process.env["NODE_ENV"] = "test";

var codeCoverage = true;
var when = require("when");
var path = require("path");
var chai = require("chai");
var sinonChai = require("sinon-chai");
var chaiAsPromised = require("chai-as-promised");

if (process.env["CODE_COVERAGE"]) {
  codeCoverage = process.env["CODE_COVERAGE"] === "true";
}

chai.use(sinonChai);
chai.use(chaiAsPromised);

when.Promise.onPotentiallyUnhandledRejection = function() { };

if (codeCoverage) {
  require("blanket")({
    pattern: [
      path.resolve(__dirname, "..", "lib"),
      path.resolve(__dirname, "..", "server.js"),
    ]
  });
}