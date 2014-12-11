'use strict';

angular.module('timeZones.controllers')
  .controller('loginCtrl', [
    '$scope',
    'UserService',

    function($scope, UserService) {
      $scope.user = {};

      $scope.login = function () {
        UserService.signIn($scope.user);
      };

      $scope.checkEmail = function () {
        return false;
      };
    }]);
