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