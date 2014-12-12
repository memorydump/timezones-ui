'use strict';

var config = require('../config/grunt');

var buildDir = '../build';

module.exports = function(grunt) {
  grunt.registerTask('production', function () {
    process.env.USE_MINIFIED = true;
    grunt.task.run([
      'build',
      'concurrent:production'
    ]);
  });
};
