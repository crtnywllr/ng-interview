(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['StudentsService'];
	function StudentsController(StudentsService) {

		/**
		 * Model
		 */

		var vm = this;
		vm.getStudents = getStudents;
		vm.activate = activate;

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */
		 function getStudents() {
 			StudentsService.getStudents().then(function(response) {
				vm.students = response.data;
				console.log(vm.students);
 			})
 			.catch(function(error) {
 				return getStudents();
 			})
 		}

		function activate() {
			vm.getStudents();
		}
	}
})();
