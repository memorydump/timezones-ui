'use strict';

angular.module('timeZones.filters', [])
  .filter('momentFormat',
    function() {
      return function (input, format) {
        return moment(input).format(format);
      };
    });

