'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .controller('LoginCtrl', function ($scope, $location, User) {
    $scope.User = User;

    $scope.master = {Username:"john", Password:"john"};
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.loginButton = function() {
      $location.path('customer');
    };
  });
