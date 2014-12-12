'use strict';

var config = require('../config/grunt');

module.exports = function (grunt) {
  grunt.config('concat', {
    app: {
      src: [
        'client/js/services/authentication-service.js',
        'client/js/controllers/sign-up-controller.js',
        'client/js/**/*.js',
      ],
      dest: 'build/client/js/' + '/timezones.js'
    },
    vendor: {
      src : [
        'client/vendor/lodash/dist/lodash.js',
        'client/vendor/modernizr/modernizr.js',
        'client/vendor/moment/moment.js',
        'client/vendor/jquery/dist/jquery.js',
        'client/vendor/bootstrap/dist/js/bootstrap.js',
        'client/vendor/angular/angular.min.js',
        'client/vendor/angular-route/angular-route.min.js',
        'client/vendor/angular-resource/angular-resource.min.js'
      ],
      dest: 'build/client/js/' + '/vendor.js'
    }
  });
};
