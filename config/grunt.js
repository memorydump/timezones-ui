'use strict';

module.exports = {
  build: {

  },

  karma: {
    config: 'karma.conf.js'
  },

  app: {
    api : {
      app     : 'api/app.js',
      routes  : 'api/routes/*.js',
      models  : 'api/models/*.js'

    },
    client : {
      js    : 'client/js/**/*.js',
      views : ['client/views/**/*.html', 'client/layouts/**/*.html']
    },
    grunt : {
      gruntFile : 'Gruntfile.js',
      tasks     : 'grunt-tasks/*.js'
    }
  },

  concat: {
    scripts: [
    ]
  }
};
