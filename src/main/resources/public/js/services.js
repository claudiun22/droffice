angular.module('app.services', []).

	factory('pacientiService', function($http) {

		var pacientiAPI = {};
		
		pacientiAPI.getPacienti = function () {
			return $http({
				url: 'http://localhost:8080/office/patients'
			});
		}
		
		pacientiAPI.getPacientDetalii = function(id) {
			return $http({
				url: 'http://localhost:8080/office/patients/' + id
			});
		}
		
		pacientiAPI.addPacient = function(pacient) {
			console.log(pacient)
			return $http({
				url: 'http://localhost:8080/office/addpatient',
				method: 'POST',
				data: pacient

			});
			
		}
		
		pacientiAPI.addIstoric = function(id, pacient) {
			return $http({
				url: 'http://localhost:8080/office/updatepatients/' + id,
				method: 'PUT',
				data: pacient
			});
		}
		
		pacientiAPI.deletePacient = function(id) {
			return $http({
				url: 'http://localhost:8080/office/patients/' + id,
				method: 'DELETE'
			});
		}
		
		pacientiAPI.getPacientibyDoctor = function(id) {
			return $http({
				url: 'http://localhost:8080/office/dr/patients/' + id,
				method: 'GET'
			})
		}
		
		
		return pacientiAPI;
		
	}).
	
	factory('doctoriService', function($http) {
		
		var doctoriAPI = {};
		
		doctoriAPI.getDoctori = function() {
			return $http({
				url: 'http://localhost:8080/dr/drlist'
			});
		}
		
		return doctoriAPI;
		
	});
	