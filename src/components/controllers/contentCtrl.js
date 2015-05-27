angular.module('Frello2').controller('ContentCtrl', function($scope, TaskFactory){
	
	$scope.tasks = TaskFactory.getTask();

});