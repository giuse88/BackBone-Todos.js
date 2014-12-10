/*
  a very simple wrapper of mysql package that reads in config,
  starts a connection pool, and exposes a singleton query function for everyone
  in this app to use.
*/

var when = require("when");
var mysql = require("mysql");

function MySQLWrapper() {
  this.initialize.apply(this, arguments);
}

MySQLWrapper.prototype = {

  initialize: function(config) {
    this.pool = mysql.createPool(config);
  },

  query: function(q, params) {
    var d = when.defer();

    this.pool.getConnection(function(err, conn) {
      if (err) {
        return d.reject(err);
      }
      var args = [q];
      if ( params ) {
        args.push(params);
      }
      args.push(function(err, result) {
        conn.release();
        if (err) {
          return d.reject(err);
        }
        d.resolve(result);
      });
      conn.query.apply(conn, args);
    });
    return d.promise;
  }

};

module.exports = MySQLWrapper;