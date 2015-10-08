'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.controller:MainCtrl
 * @description
 * # SecurityCtrl
 * Controller of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .controller('SecurityCtrl', function ($scope, $http, ItemDetail, $base64, $routeParams, User) {
    $scope.User = User;

    $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode($scope.User.Username + ':' + $scope.User.Password);

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

    var queryParams = { symbol: $routeParams.symbol };
    ItemDetail.query(queryParams, {}, function (response) {
      $scope.security = response;
      console.log('security data - ', $scope.security.length);
    });


    $scope.table = true;

    $scope.toggleTable = function() {
      $scope.table = $scope.table === false ? true: false;
    };
  });
