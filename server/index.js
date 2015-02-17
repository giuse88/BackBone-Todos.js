var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var Todos = require("./collections/todos");

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
};

app.use(allowCrossDomain);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: "application/vnd.api+json"}));


app.get("/todos/", function (req, res) {
  return new Todos().fetch()
    .then(function (collection) {
      res.json(collection.toJSON());
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
});

app.listen(5000, function() {
  console.log("Express started at port 3000");
});