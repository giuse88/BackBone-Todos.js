var when = require("when");
var request = require("request");

var testServer = {
  start: start,
  stop: stop,
  http: {
    get: httpMethod("get"),
    post: httpMethod("post")
  },
  // Service calls
  status: require("./status")
};

function stop() {
  testServer.server.close();
}

function start(options) {
  return createServer(options).then(function() {
    return testServer;
  });
}

function createServer() {
  testServer.app = require("../../app");

  return serve(testServer.app).then(onStarted);

  function onStarted(server) {
    testServer.host = getHost(server.address().port);
    testServer.server = server;

    return testServer;
  }
}

function serve(app) {
  return when.promise(function(resolve) {
    var server = app.listen(0, function() {
      resolve(server);
    });
  });
}

function getHost(port) {
  return "http://localhost:" + port;
}

function httpMethod(method) {
  return function(url, options) {
    return when.promise(function(resolve, reject) {
      if (url.indexOf("/") !== 0) {
        url = "/" + url;
      }

      request[method](testServer.host + url, options, function(err, res) {
        if (err) {
          reject(err);
        } else {
          testServer.res = res;
          resolve(res);
        }
      });
    });
  };
}

module.exports = testServer;