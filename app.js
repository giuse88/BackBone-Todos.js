if (!process.env.NODE_CONFIG_DIR) {
  process.env.NODE_CONFIG_DIR = __dirname + "/config";
}


var express = require("express");
var raven = require("raven");
var config = require("config");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

if (config.log.sentry) {
  app.use(raven.middleware.express(config.log.sentry.dsn));
}

app.logger = require("./lib/logger");
require("express-status")(app);

app.get("/", require("./routes/index"));

module.exports  = app;
