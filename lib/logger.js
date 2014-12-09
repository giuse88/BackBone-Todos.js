var _ = require("lodash");
var Sentry = require("winston-sentry");
var winston = require("winston");
var config = require("config");

var transports = [new(winston.transports.Console)(_.extend({
  level: "debug",
  colorize: true,
  timestamp: true
}, config.log.console))];

if (config.log.sentry) {
  transports.push(new Sentry(_.extend({
    level: "error",
    timestamp: true
  }, config.log.sentry)));
}

module.exports = new winston.Logger({
  transports: transports
});
