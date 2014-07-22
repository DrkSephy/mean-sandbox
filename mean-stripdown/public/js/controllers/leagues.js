window.angular.module('ngff.controllers.leagues', [])
    .controller('LeaguesController', ['$scope','$routeParams','$location','Global','Leagues',
        function ($scope, $routeParams, $location, Global, Leagues) {
            $scope.global = Global;

        $scope.create = function () {
            var league = new Leagues({
            name: this.league.name
        });
         
        league.$save(function (response) {
            $location.path("leagues/" + response._id);
        });
         
            this.league.name = "";
        };

        $scope.find = function (query) {
            Leagues.query(query, function (leagues) {
            $scope.leagues = leagues;
            });
        };

        $scope.findOne = function () {
            Leagues.get({ leagueId: $routeParams.leagueId }, function (league) {
            $scope.league = league;
            });
        };
}]);