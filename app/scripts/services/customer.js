'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.factory:customer
 * @description
 * # Customer
 * Service of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .factory('Customer', function($resource) {
    return $resource("http://localhost:9091/greeting/:id");
  });
