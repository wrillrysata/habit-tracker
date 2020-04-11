"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dotenv = require('dotenv');

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

dotenv.config();
var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
(0, _routes["default"])(app);
app.use('*', function (req, res) {
  return res.send({
    message: 'The API route you requested does not exist'
  });
});
app.listen(port, function () {
  return console.log("Habit tracker app listening on port ".concat(port));
});
var _default = app;
exports["default"] = _default;