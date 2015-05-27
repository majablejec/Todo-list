angular.module('Frello2').controller('OutsideCtrl', function($scope, TaskFactory){
	
	$scope.addTask = function(newTask){
		TaskFactory.addTask(newTask);
		$scope.newTask = ''; // Zakaj ne dela? Je na body, torej v najbolj zunanjem controlerju, kar pomeni, da bi ga morali doseči tudi vsi drugi controlerji ... Ne dela tudi, če dam $rootScope.newTask = '';
	};
	
	$scope.removeTask = function($index){
		TaskFactory.removeTask($index);
	}
	
	$scope.editTask = function($index, task){
		TaskFactory.editTask($index, task);
	};
	
});