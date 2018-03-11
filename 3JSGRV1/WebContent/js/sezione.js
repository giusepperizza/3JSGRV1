appModule.controller('sezione', function($scope, $state, $http) {
	$scope.selectedSezione = $state.params.sezione;
    
	$scope.loadSezione = function(){
		var filePath = "resources/3JSDS-";
		switch($scope.selectedSezione){
		case "modellazione":
			filePath += "MOD.json";
			break;
		case "animazione":
			filePath += "ANI.json";
			break;
		case "interattivita":
			filePath += "INT.json"
		}
		
		$http({
			method: "get",
			url: filePath,
			dataType: "json",
			contentType: "application/json"
		})
		.then(function successCallback(response){
			$scope.datiSezione = response;
		}, function errorCallback(response){
			
		});
	}
	
	$scope.loadSezione();
	
});