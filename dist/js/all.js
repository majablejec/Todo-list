angular.module('Frello2',[]);
angular.module('Frello2').controller('ContentCtrl', function($scope, TaskFactory){
	
	$scope.tasks = TaskFactory.getTask();

});
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
angular.module('Frello2').factory('TaskFactory', [ '$rootScope', function($rootScope){
  
	var tasks = [
		'Task 1', 
		'Task 2', 
		'Task 3'
	];
  
	return {
		getTask : function() {
			return tasks;
		},
		addTask : function(task){
			tasks.push(task);
			$rootScope.$broadcast('taskAdded');
		},
		editTask : function($index, task){
			tasks[$index] = task;
			$rootScope.$broadcast('taskEdited');
		},
		removeTask : function($index){
			tasks.splice($index, 1);
			$rootScope.$broadcast('taskRemoved');
		}
	};
                                  
}]);