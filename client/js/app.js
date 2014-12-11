'use strict';

angular.module('timeZones', [
  'ngRoute',
  'ngResource',
  'timeZones.services',
  'timeZones.controllers',
  'timeZones.filters'
])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider

      .when('/login', {
        templateUrl: '/views/login.html'
      })

      .when('/signup', {
        templateUrl : '/views/signup.html'
      })

      .when('/zones', {
        templateUrl: '/views/zones.html',
        access: { requiredLogin: true }
      })

      .otherwise({
        templateUrl: '/views/home.html'
      });

    $locationProvider.html5Mode(true);
  })

  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
    $httpProvider.interceptors.push('FlashMsgInterceptor');
  })


.run(function ($rootScope, $location, $http, AuthenticationService, UserService) {

    $http.defaults.headers.common['Cache-Control'] = 'no-cache';

    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if (nextRoute.access && nextRoute.access.requiredLogin && !AuthenticationService.isAuthenticated) {
        $location.path('/login');
      }

      if ($location.path() === '/logout') {
        UserService.logout();
        $location.path('/');
      }
    });

  })

;
