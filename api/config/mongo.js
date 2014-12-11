'use strict';

var mongoose       = require('mongoose');
var mongodbURL     = 'mongodb://localhost/timezones';
var mongodbOptions = { };

mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
  if (err) {
    console.log('Connection refused to ' + mongodbURL);
    console.log(err);
  } else {
    console.log('Connection successful to: ' + mongodbURL);
  }
});

exports.Schema = mongoose.Schema;
exports.model  = mongoose.model;
