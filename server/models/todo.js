var Domain = require("../db/domain");

var Todo = Domain.Model.extend({
  tableName : "todos"
});

module.exports = Todo;