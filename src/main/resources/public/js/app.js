(function() {
	var app = angular.module('app', ['app.controllers', 'app.services', 'ngRoute', 'ngCookies'])
	
	app.config(['$routeProvider', function($routeProvider) {
		
		$routeProvider.
			when("/pacienti", 
					{
						templateUrl: 'views/pacienti.html',
						controller: 'pacientiController'
					}).
			when("/pacienti/:id", 
					{
						templateUrl: 'views/pacient.html',
						controller: 'detaliiPacientController'
					}).
			when('/addPacient', {
						templateUrl:'views/addPacient.html',
						controller: 'detaliiPacientController'
					}).
			when('/doctori', {
						templateUrl:'views/doctori.html',
						controller: 'doctoriList'
					}).
			when('/', {
					templateUrl:'views/homepage.html'
			}).
			otherwise(
					{
						redirectTo: '/'
					});
		
	}]);

	
}());