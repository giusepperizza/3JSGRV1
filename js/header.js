appModule.controller('header', function($scope, $state) {
    $scope.goToSelectedState = function(stateName){
    	$state.go("sezione", {"sezione" : stateName});
    }
    
    $scope.goHome = function(){
    	$state.go("home", {});
    }
    
    $scope.goBio = function(){
    	$state.go("bio", {});
    }
});