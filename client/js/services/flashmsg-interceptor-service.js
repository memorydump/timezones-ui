'use strict';

angular.module('timeZones.services')
  .factory('FlashMsgInterceptor', ['$q', '$rootScope',
    function ($q, $rootScope) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          return config;
        },

        requestError: function(rejection) {
          return $q.reject(rejection);
        },

        response: function (response) {
          return response || $q.when(response);
        },

        responseError: function(rejection) {
          if (rejection !== null && (rejection.status === 401 || rejection.status === 409)) {
            $rootScope.flashMsg = {
              errorMsg : rejection.data.errorMsg
            };
          }
          return $q.reject(rejection);
        }
      };
    }]);


