/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

var employeeController = function ($scope,EmployeeService) {
  $scope.employee = {};
  angular.copy(EmployeeService.get(),$scope.employee);
  $scope.saveEmployee = function() {
    EmployeeService.save($scope.employee);
  }
};

