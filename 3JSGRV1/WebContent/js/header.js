appModule.controller('header', function($scope, $state) {
    console.log("controller header");
    $scope.goToSelectedState = function(stateName){
    	 $state.go(stateName, {});
    }
});