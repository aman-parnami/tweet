var express = require('express');
var mysql      = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pass',
  database :'myFirstNodeApp'
});

module.exports = db;
