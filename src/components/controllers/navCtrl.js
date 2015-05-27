angular.module('Frello2').controller('NavCtrl', function($scope, $timeout){
	
	$scope.$on('taskAdded', function(event){
		$scope.taskAdded = true;
		$timeout(function(){
			$scope.taskAdded = false;
		}, 2000)
	});
		
	$scope.$on('taskEdited', function(event){
		$scope.taskEdited = true;
		$timeout(function(){
			$scope.taskEdited = false;
		}, 2000)
	});
	
	$scope.$on('taskRemoved', function(event){
		$scope.taskRemoved = true;
		$timeout(function(){
			$scope.taskRemoved = false;
		}, 2000)
	});

});