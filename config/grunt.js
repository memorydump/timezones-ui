'use strict';

module.exports = {
  build: {
    rootDir: 'build',
    workDir: 'build/work',
    staticDir: 'build/static',
    redboxDir: 'build/static/redbox'
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
      'app/framework/js/interceptors.js',
      'app/framework/js/core.js',
      'app/framework/js/app.js',
      'app/framework/js/globals.js',
      'app/framework/js/controllers.js',
      'app/framework/js/services.js',
      'app/framework/js/directives.js',
      'app/**/js/module.js',
      'app/**/modules/**/module.js',
      'app/**/*controllers.js',
      'app/**/*-controller.js',
      'app/**/*-service.js',
      'app/**/*-directive.js',
      'app/**/*-filter.js',
      'app/**/js/services.js',
      // include all of the benefits javascript files.
      'app/benefits/js/**/*.js',
      // skip the controllers. They are used for unit testing only.
      '!app/benefits/js/controllers/**/*.js',
      // add the benefits services.
      'app/benefits/services/**/*.js',
      '!app/**/*-spec.js'
    ]
  }
};
