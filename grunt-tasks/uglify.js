'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {

  grunt.config('uglify', {
    js: {
      options: {
        mangle: false,
        compress: {
          'drop_console': true
        }
      },
      files: [
        {
          src: 'build/client/js' + '/timezones.js',
          dest: 'build/client/js' + '/timezones.min.js'
        },
        {
          src: 'build/client/js' + '/vendor.js',
          dest: 'build/client/js' + '/vendor.min.js'
        }
      ]
    },
    vendor: {
      options: {
        compress: {
          'drop_console': true
        }
      },
      files: [
        {
          // to come
        }
      ]
    },
    templates: {
      options: {
        mangle: false,
        compress: {
          'drop_console': true
        }
      },
      files: [
        {
          src: config.build.workDir + '/templates.app.js',
          dest: config.build.redboxDir + '/templates.app.min.js'
        },
        {
          src: config.build.workDir + '/templates.ext.js',
          dest: config.build.redboxDir + '/templates.ext.min.js'
        }
      ]
    }
  });
};
