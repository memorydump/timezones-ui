'use strict';

var config = require('../config/grunt');
var fs     = require('fs');

module.exports = function (grunt) {
  grunt.config('shell', {
    'mongo-start': {
      command : function (greeting) {
        var dbDir   = './db';
        var command = '';
        if (!fs.existsSync(dbDir)) {
          command += 'mkdir ./db &&';
        }
        return command + 'mongod --dbpath ./db/';
      }
    }
  });
};
