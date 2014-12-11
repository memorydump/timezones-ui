'use strict';

angular.module('timeZones.services')
  .service('ZonesService', ['$http', '$q',
    function ($http, $q) {
      var defer;

      this.getZones = function () {
        if (!defer) {
          defer = $q.defer();
          $http
            .get('/api/zones').success(function (data) {
              defer.resolve(data);
            });
        }
        return defer.promise;
      };

      this.create = function (zone) {
        return $http.post('/api/zones', zone);
      };

      this.update = function (zone) {
        return $http.put('/api/zones', zone);
      };

      this.delete = function (zone) {
        return $http.delete('/api/zones/' + zone._id);
      };
    }
  ]);


