'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {
  grunt.config('concurrent', {
    dev: {
      tasks: ['shell:mongo-start', 'nodemon:api', 'nodemon:client', 'node-inspector', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    production: {
      tasks: ['shell:mongo-start', 'nodemon:api', 'nodemon:client'],
      options: {
        logConcurrentOutput: false
      }
    }
  });
};

