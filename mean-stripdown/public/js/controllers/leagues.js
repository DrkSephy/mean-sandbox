window.angular.module('ngff.controllers.leagues', [])
    .controller('LeaguesController', ['$scope','$routeParams','$location','Global','Leagues',
        function ($scope, $routeParams, $location, Global, Leagues) {
            $scope.global = Global;
}]);