'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {
  grunt.config('uglify', {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    }
  });
};
