var app = angular.module("10minuteApp", ["ngMaterial"]);

app.controller("MainController", ["$scope", "$mdSidenav", "$mdMedia", function($scope, $mdSidenav, $mdMedia){
	$scope.toggle = function(){
		$mdSidenav('left').toggle()
	};
	
}])