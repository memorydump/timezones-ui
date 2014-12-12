'use strict';

var config = require('../config/grunt');

var buildDir = '../build';

module.exports = function(grunt) {
  grunt.registerTask('production', function () {
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
      'copy:production',
      //'strip_code',
      //'ngtemplates',
      //'compress'
      'concurrent:production'
    ]);
  });
};
