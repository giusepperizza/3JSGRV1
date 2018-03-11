appModule.controller('header', function($scope, $state) {
    $scope.goToSelectedState = function(stateName){
    	 $state.go("sezione", {"sezione" : stateName});
    }
});