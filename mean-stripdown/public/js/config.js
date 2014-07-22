//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', { templateUrl: 'views/index.html' })
    .when('/nflteams', { templateUrl: 'views/nfl/list.html' })
    // The string value in this URL will be available as $routeParams['nflTeamId']
    // in the controller once $routeParams is injected.
    .when('/nflteams/:nflTeamId', { templateUrl: 'views/nfl/views.html' })
	.when('/leagues', {templateUrl: 'views/leagues/list.html'})
    .when('/leagues/create', {templateUrl: 'views/leagues/create.html'})
    .when('/leagues/:leagueId/edit', {templateUrl: 'views/leagues/edit.html'})
    .when('/leagues/:leagueId', {templateUrl: 'views/leagues/view.html'})
    .otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);