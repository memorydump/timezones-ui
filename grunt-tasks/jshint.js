'use strict';

var config = require('../config/grunt');
var _      = require('lodash');

module.exports = function(grunt) {
  grunt.config('jshint', {
    options: {
      jshintrc: true
    },
    files: [
      _.values(config.app.api),
      config.app.client.js
    ]
  });
};
