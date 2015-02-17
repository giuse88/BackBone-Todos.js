var Todo = require("../models/todo");
var Domain = require("../db/domain");

var Todos = Domain.Collection.extend({
  model : Todo
});

module.exports = Todos;