angular.module('myApp', [
    'ui.router',
    'myApp.controllers.IntroCtrl',
    'myApp.controllers.MovieCtrl',
    'myApp.services.Avengers',
    'myApp.directives.Actor'
])

.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('intro', {
			url: '/',
			templateUrl: 'views/intro.html',
			controller: 'IntroCtrl'
		})


		.state('dashboard', {
			url: "/dashboard",
      templateUrl: "views/menu.html",
			controller: 'DashboardCtrl'
		})

		.state('addMovie', {
			url: "/add-movie",
      templateUrl: "views/new-movie.html",
			controller: 'MovieCtrl'
		})
  ;


	$urlRouterProvider.otherwise('/');

});
