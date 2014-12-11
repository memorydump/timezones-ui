'use strict';

angular.module('timeZones.services')
  .factory('TokenInterceptor', ['$q', '$window', '$location', 'AuthenticationService',
    function ($q, $window, $location, AuthenticationService, UserService) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          var token = $window.sessionStorage.user ? JSON.parse($window.sessionStorage.user).token : null;
          if (token) {
            config.headers.Authorization = 'Bearer ' + token;
          }
          return config;
        },

        requestError: function(rejection) {
          return $q.reject(rejection);
        },

        /* Set Authentication.isAuthenticated to true if 200 received */
        response: function (response) {
          var token = $window.sessionStorage.user ? JSON.parse($window.sessionStorage.user).token : null;
          if (response !== null && response.status === 200 && token && !AuthenticationService.isAuthenticated) {
            AuthenticationService.isAuthenticated = true;
          }
          return response || $q.when(response);
        },

        /* Revoke client authentication if 401 is received */
        responseError: function(rejection) {
          var token = $window.sessionStorage.user ? JSON.parse($window.sessionStorage.user).token : null;
          if (rejection !== null && rejection.status === 401 && rejection.data.errorCode !== undefined &&
              rejection.data.errorCode === 0) {
            delete $window.sessionStorage.user.token;
            AuthenticationService.isAuthenticated = false;
            $location.path('/login');
          }

          return $q.reject(rejection);
        }
      };
    }]);


