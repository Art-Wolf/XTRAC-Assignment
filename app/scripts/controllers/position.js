'use strict';

/**
 * @ngdoc function
 * @name xtracAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xtracAssignmentApp
 */
angular.module('xtracAssignmentApp')
  .controller('PositionCtrl', function ($scope, $http, Item, $base64, $routeParams, User, $location) {
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

    var queryParams = { account: $routeParams.accountNo };
    Item.query(queryParams, {}, function (response) {
      $scope.positions = response;
      console.log('all positions - ', $scope.positions.length);
    });

    $scope.table = true;

    $scope.toggleTable = function() {
      $scope.table = $scope.table === false ? true: false;
    };

    $scope.loadSymbol=function(symbol){
      $location.path('security/'+symbol);
    };
  });
