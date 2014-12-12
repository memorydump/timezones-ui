'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {
  grunt.config('clean', {
    build: [
      'build'
    ]
  });
};
