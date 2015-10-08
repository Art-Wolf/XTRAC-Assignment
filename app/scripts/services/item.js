'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.factory:item
 * @description
 * # Item
 * Service of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .factory('Item', function($resource) {
    return $resource("http://localhost:9092/item/:id");
  });
