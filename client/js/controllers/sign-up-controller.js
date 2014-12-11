'use strict';

angular.module('timeZones.controllers', [])
  .controller('signUpCtrl', [
    '$scope',
    '$location',
    '$rootScope',
    '$window',
    'UserService',
    'AuthenticationService',

    function($scope, $location, $rootScope, $window, UserService, AuthenticationService) {
      $scope.user = {
        fullName : '',
        email    : '',
        password : ''
      };

      $scope.createUser = function () {
        UserService.register($scope.user);
      };

      $scope.cancel = function () {
        $scope.user = {};
      };
  }]);

