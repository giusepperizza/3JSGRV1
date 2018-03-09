var appModule = angular.module('app', ['ngRoute', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider
//	.when('/animazione', {
//		templateUrl : 'html/animazione.html',
//		controller : 'animazione',
//	})
//	.when('/modellazione', {
//		templateUrl : 'html/modellazione.html',
//		controller : 'modellazione',
//	})
//	.when('interattivita', {
//		templateUrl : 'html/interattivita.html',
//		controller : 'interattivita',
//	})
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	.state('animazione', {
		url: '/animazione',
		templateUrl: 'html/animazione.html',
		controller: 'animazione',
//		name: 'animazione'
	})
	.state('modellazione', {
		url: '/modellazione',
		templateUrl: 'html/modellazione.html',
		controller: 'modellazione',
//		name: 'modellazione'
	})
	.state('interattivita', {
		url: '/interattivita',
		templateUrl: 'html/interattivita.html',
		controller: 'interattivita',
//		name: 'interattivita'
	})
	.state('home', {
		url: '/home',
		templateUrl: 'html/home.html',
		controller: 'home',
//		name: 'home'
	})
})
.run(function($rootScope){
	
});
