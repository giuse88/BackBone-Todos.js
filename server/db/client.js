var knex = require("knex");
var env = process.env.NODE_ENV || "development";
var config = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo",
    charset: "utf8"
  }
};

if (!config) {
  console.error("Could not find database config in ./knexfile.js for env " + env);
} else {
  module.exports = knex(config);
}