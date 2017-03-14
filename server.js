//required npms
var express = require('express');
var parser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));