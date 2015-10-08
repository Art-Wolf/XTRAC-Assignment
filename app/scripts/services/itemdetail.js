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
    return $resource("http://localhost:9092/itemdetail", {}, {
      query: {method : "POST", isArray: true}
    });
  });
