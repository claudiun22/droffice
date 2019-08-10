angular.module('app.controllers', []).


 /* Controller Lista Pacienti */

	controller('pacientiController', function($scope, pacientiService) {	
		pacientiService.getPacienti().then(function(response) {
			$scope.pacienti = response.data;
		}, function error (response) {
			console.log('error: ' + response.data);
		});	
	}).
	
	

/* Controller detalii pacient */
	
	controller('detaliiPacientController', function($location, $scope, $routeParams, pacientiService) {
		$scope.id = $routeParams.id;
		
		
	
		pacientiService.getPacientDetalii($scope.id).then(function(response) {
				$scope.pacient = response.data;
		}, function error (response) {
				console.log(response.data);
		});
		
	
		$scope.updateIstoric = function() {
			
			var pacient = {
					id: $scope.id,
					nume: $scope.pacient.nume,
					prenume: $scope.pacient.prenume,
					data_nastere: $scope.pacient.data_nastere,
					adresa: $scope.pacient.adresa,
					istoric : $scope.pacient.istoric

			};

			pacientiService.addIstoric($scope.id, pacient).then(function(response) {
					$scope.responseMessage = response.data;
			}, function error (response) {
					console.log(response.data);
			});
			
			$location.path( "/pacienti" );
		}
		
		$scope.deletePacient = function () {
			
			pacientiService.deletePacient($scope.id).then(function(response) {
					$scope.responseMessage = response.data;
			}, function error (response) {
					console.log(response.data);
			});
			
			$location.path( "/pacienti" );
		}
		
	}).
	
/* add pacient */
	
	
	controller('addPacient', function($scope, $routeParams, $location, pacientiService) {
		
		$scope.addPacient = function (pacient) {
			
			var pacient = {
					nume: $scope.pacient.nume,
					prenume: $scope.pacient.prenume,
					data_nastere : $scope.pacient.data_nastere,
					adresa : $scope.pacient.adresa,
					istoric : $scope.pacient.istoric
			};
			
			pacientiService.addPacient(pacient).then(function(response) {
					$scope.responseMessage = response.data;
			}, function error (response) {
					console.log(response.data);
			});
			
			   $location.path( "/pacienti" );
			
		}
		
		
		
		
	}).
	
/* dr list controller */
	
	controller('doctoriList', function(doctoriService, $scope, pacientiService){
		
		doctoriService.getDoctori().then(function(response){
			$scope.doctori = response.data;

			var i = 0;
//			for (i = 0; i< $scope.doctori.length; i++){
			for (doctor of $scope.doctori) {
					pacientiService.getPacientibyDoctor(doctor.id).then(function(response) {
						pacienti = response.data;
						$scope.newDr =$scope.doctori.map(doctor => ({ doctor, pacienti}))
						console.log($scope.newDr);
				}, function error (response) {
						console.log(response.data);
				});
			}
			
		}, function error(response) {
			console.log(response)
		});
		
		
		
	})
