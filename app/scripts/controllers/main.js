'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .controller('MainCtrl', function ($scope, $http, Customer, $base64) {

    $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode('john' + ':' + 'john');

    $http.get('http://localhost:9092/token').success(function(token) {
      $http({
        url : 'http://localhost:9092',
        method : 'GET',
        headers : {
          'X-Auth-Token' : token.token
        }
      }).success(function(data) {
        $scope.greeting = data;
      });
    });

    $scope.customers  = Customer.query(function() {
      console.log('all customers - ', $scope.customers.length);
    });

    $scope.table = true;

    $scope.toggleTable = function() {
      $scope.table = $scope.table === false ? true: false;
    };
  });
