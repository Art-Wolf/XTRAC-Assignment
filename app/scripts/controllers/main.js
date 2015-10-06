'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .controller('MainCtrl', function ($scope, Customer) {

    $scope.customers  = Customer.query(function() {
      console.log('all customers - ', $scope.customers.length);
    });

    $scope.table = true;

    $scope.toggleTable = function() {
      $scope.table = $scope.table === false ? true: false;
    };
  });
