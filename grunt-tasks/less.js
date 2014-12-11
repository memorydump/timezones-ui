'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {
  grunt.config('less', {
    development: {
      options: {
        paths: ['client/css']
      },
      files: {
        'client/css/style.css': 'client/css/style.less'
      }
    }
  });
};

