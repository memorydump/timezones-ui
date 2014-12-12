'use strict';

var config = require('../config/grunt');

module.exports = function(grunt) {
  grunt.config('cssmin', {
    release: {
      files: [
        {
          src: 'client/css/style.css',
          dest:'build/client/css/timezones.min.css'
        },
        {
          src: 'client/css/theme.css',
          dest:'build/client/css/theme.min.css'
        },
        {
          src: 'client/css/style.css',
          dest:'build/client/css/style.min.css'
        },
        {
          src: 'client/vendor/bootstrap/dist/css/bootstrap.css',
          dest:'build/client/css/bootstrap.min.css'
        },
        {
          src: 'client/vendor/fontawesome/css/font-awesome.css',
          dest:'build/client/css/font-awesome.min.css'
        }
      ]
    }
  });
};
