var express = require('express');
var parser = require('body-parser');
var db = require('./db');
var path = require('path');
var PORT = 9001;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, () => console.log('port is listening on 9001'));