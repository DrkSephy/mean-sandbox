window.angular.module('ngff.controllers.nfl', [])
  .controller('NFLController', ['$scope','$routeParams','Global','NFL',
      function($scope, $routeParams, Global, NFL) {
        $scope.global = Global;
     
  }]);