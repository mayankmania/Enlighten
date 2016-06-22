/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

var employeeController = function ($scope,EmployeeService) {
  $scope.Message = EmployeeService.get();
};
