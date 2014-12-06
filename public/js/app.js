angular.module('timeZones', [
  'ngRoute',
  'ngResource'
])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/views/login.html'
      })

      .when('/signup', {
        templateUrl: '/views/signup.html'
      })

      .when('/zones', {
        templateUrl: '/views/zones.html'
      })

      .otherwise({
        templateUrl: '/views/home.html'
      });

    $locationProvider.html5Mode(true);
  })

;
