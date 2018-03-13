var appModule = angular.module('app', ['ngRoute', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('sezione', {
		url: '/sezione/:sezione',
		templateUrl: 'html/sezione.html',
		controller: 'sezione',
		params: {'sezione' : null}
	})
	.state('home', {
		url: '/home',
		templateUrl: 'html/home.html',
		controller: 'home',
	})
	.state('bio', {
		url: '/bio',
		templateUrl: 'html/bio.html',
		controller: 'bio'
	})
	
//	$locationProvider.html5Mode(true);
//	$locationProvider.hashPrefix("");
})
.run(function($rootScope){
	$rootScope.versione = "1.0";
});
