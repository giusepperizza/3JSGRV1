appModule.directive('loading', function() {
    return{
    	restrict : 'EA',
    	templateUrl : "html/directives/loading.html",
    	scope : {
    		visibleWhen : '='
    	}
    }
});