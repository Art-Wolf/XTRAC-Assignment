'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.factory:itemdetail
 * @description
 * # ItemDetail
 * Service of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .factory('ItemDetail', function($resource) {
    return $resource("http://localhost:9091/itemdetail/:id");
  });
