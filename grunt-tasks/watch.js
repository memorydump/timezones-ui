'use strict';

var config = require('../config/grunt');
var _      = require('lodash');

module.exports = function (grunt) {
  grunt.config('watch', {
    styles: {
      files: ['client/css/*.less'],
      tasks: ['less:development'],
      options: {
        spawn: false
      }
    },
    scripts: {
      files : [
        _.values(config.app.api),
        _.values(config.app.grunt),
        config.app.client.js
      ],
      tasks: ['jshint']
    },
    views : {
      files : [config.app.client.views],
      tasks : ['htmlhint']
    },
    server: {
      files: ['.rebooted'],
      options: {
        livereload: true
      }
    }
  });
};

