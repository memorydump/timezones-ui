'use strict';

var config = require('../config/grunt');

module.exports = function(grunt) {
  grunt.config('copy', {
    production: {
      files: [
        {
          expand: true,
          //cwd: 'src/',
          flatten: true,
          filter: 'isFile',
          src: 'client/views/**/*.html',
          dest: 'build/client/views/'
        },
        {
          expand: true,
          flatten: true,
          filter: 'isFile',
          src: 'client/img/**/*.*',
          dest: 'build/client/img/'
        },
        {
          expand: true,
          flatten: true,
          filter: 'isFile',
          src: 'client/vendor/fontawesome/fonts/*.*',
          dest: 'build/client/fonts/'
        }
      ]
    }
  });
};

