'use strict';

angular.module('timeZones.controllers')
  .controller('zonesCtrl', [
    '$scope',
    '$timeout',
    'ZonesService',

    function($scope, $timeout, ZonesService) {

      var zonesOriginal;

      var calcCurrentTime = function (offset) {
        return moment(new Date().getTime()).zone(offset*-60);
      };

      ZonesService.getZones().then(function (zones) {
        angular.forEach(zones, function (zone) {
          zone.currentTime = calcCurrentTime(zone.utcOffSet);
          zone.utcOffSet   = (zone.utcOffSet > 0) ? '+' + zone.utcOffSet : zone.utcOffSet;
        });
        $scope.zones  = zones;
        zonesOriginal = angular.copy(zones);
      });

      $scope.filter = {
        name : ''
      };

      $scope.add = function () {
        $scope.zones.unshift({edit : true});
      };

      $scope.edit = function (index) {
        $scope.zones[index].edit = true;
      };

      $scope.save = function (index) {
        //$scope.zones[index].utc = new Date();
        $scope.zones[index].created = new Date();

        var promise;
        if ($scope.zones[index]._id) {
          promise = ZonesService.update($scope.zones[index]);
        } else {
          promise = ZonesService.create($scope.zones[index]);
        }

        promise.then(function () {
          $scope.zones[index].edit = false;
          $scope.zones[index].currentTime =  calcCurrentTime($scope.zones[index].utcOffSet);
        });
      };

      $scope.delete = function (index) {
        ZonesService.delete($scope.zones[index]).then(function () {
          $scope.zones.splice(index, 1);
        });
      };

      $scope.cancel = function (index) {
        if ($scope.zones[index]._id) {
          var original        = angular.copy(zonesOriginal[index]);
          original.edit       = true;
          $scope.zones[index] = original;
          $timeout(function () {
            $scope.zones[index].edit = false;
          });

        } else {
          $scope.zones.splice(index, 1);
        }
      };

      $scope.gmtDiffPattern = (function() {
        var regexp = /^[+|-]?\d+([.]\d+)?$/;
        return {
          test: function(value) {
            if( $scope.requireTel === false ) {
              return true;
            }
            return regexp.test(value);
          }
        };
      })();
    }]);

