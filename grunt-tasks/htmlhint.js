'use strict';

var config = require('../config/grunt');

module.exports = function(grunt) {
  grunt.config('htmlhint', {
    src: [
      config.app.client.views
    ],
    options: {
      'tag-pair': true,
      'id-unique': true
    }
  });
};
