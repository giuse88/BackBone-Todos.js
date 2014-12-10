/*
  This module just instantiates the database wrapper with our app's config.
  Everyone can then do require("./lib/db").query("SELECT *");
*/

var DBWrapper = require("./mysql_wrapper");
module.exports = new DBWrapper(require("config").db);
