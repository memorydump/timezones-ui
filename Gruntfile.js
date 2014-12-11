'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  // load all grunt tasks (modules) in the grunt-tasks directory
  grunt.loadTasks('grunt-tasks');

  // default tasks
  grunt.registerTask('default', [
    'concurrent'
  ]);

  // Lints & Hints JS, HTML, and CSS files.
  grunt.registerTask('lintCode', function () {
    var skipLint = grunt.option('skipLint');
    if (!skipLint) {
      grunt.task.run([
        'jshint',
        'htmlhint',
        //'csslint'
      ]);
    }
  });

};
