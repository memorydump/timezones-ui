'use strict';

var config = require('../config/grunt');

var buildDir = '../build';

module.exports = function(grunt) {
  grunt.registerTask('build', function () {
    process.env.USE_MINIFIED = true;
    grunt.task.run([
      'lintCode',
      'clean:build',
      'concat:app',
      'concat:vendor',
      'preprocess:html',
      'uglify:js',
      'uglify:vendor',
      'less',
      'cssmin',
      'copy:production'
      //'bust-cache',  //todo add checksum to the end of the requested files
      //'ngtemplates', //todo compile all of the angular templates
    ]);
  });
};
