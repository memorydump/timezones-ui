'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {
  grunt.config('preprocess', {
    options: {
      context: {
        DEBUG: true
      }
    },
    html: {
      files: [
        {
          src: 'client/layouts/main.html',
          dest: 'build/client/layouts/' + 'main.html'
        }
      ]
    }
  });
};
