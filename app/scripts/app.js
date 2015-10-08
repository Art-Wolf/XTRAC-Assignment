'use strict';

/**
 * @ngdoc overview
 * @name xtracAssignmentApp
 * @description
 * # xtracAssignmentApp
 *
 * Main module of the application.
 */
angular
  .module('xtracAssignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'base64',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/customer/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/position/:accountNo', {
        templateUrl: 'views/position.html',
        controller: 'PositionCtrl',
        controllerAs: 'position'
      })
      .when('/security/:symbol', {
        templateUrl: 'views/security.html',
        controller: 'SecurityCtrl',
        controllerAs: 'security'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
