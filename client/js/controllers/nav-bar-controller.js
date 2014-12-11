'use strict';

angular.module('timeZones.controllers')
  .controller('navBarCtrl', [
    '$scope',
    '$rootScope',
    'UserService',

    function($scope, $rootScope, UserService) {
      $scope.user = UserService.user;

      $rootScope.$on('user.changed', function () {
        $scope.user = UserService.user;
      });

      $scope.closeFlashMsg = function () {
        delete $rootScope.flashMsg;
      };
    }])
;

