'use strict';

angular.module('timeZones.services')
  .service('UserService', ['$http', '$window', '$location', '$rootScope', 'AuthenticationService',
    function ($http, $window, $location, $rootScope, AuthenticationService) {

      if ($window.sessionStorage.user) {
        this.user = JSON.parse($window.sessionStorage.user);
        AuthenticationService.isAuthenticated = true;
      }

      var self  = this;

      var setUser = function (user) {
        AuthenticationService.isAuthenticated   = true;

        self.user                               = user.data;
        $window.sessionStorage.user             = JSON.stringify(self.user);

        $rootScope.$broadcast('user.changed');
      };

      this.register = function (user) {
        $http.post('/api/user/register', user)
          .then(function (data) {
            setUser(data);
            $location.path('/zones');
          });
      };

      this.signIn = function (user) {
        $http
          .post('/api/user/signin', user)
            .then(function (data) {
              setUser(data);
              $location.path('/zones');
            })
            .catch(function () {
              console.log('Bad Login');
              self.logout();
            });
      };

      this.logout = function () {
        //$http
        //  .post('/api/user/logout')
        //    .success(function () {
        //      delete $window.sessionStorage.user;
        //      this.user = {};
        //      $rootScope.$broadcast('user.changed');
        //    })

        delete $window.sessionStorage.user;
        this.user = {};
        AuthenticationService.isAuthenticated   = false;
        $rootScope.$broadcast('user.changed');

      };
  }]);


