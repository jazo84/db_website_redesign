var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var models = require('./models');
models.sequelize.sync();

app.use(express.static("./public"));

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require('./controller/routes.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
