/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />
/// <reference path="../../model/employee.js" />

function employeeController($scope, $filter, EmployeeService) {
  $scope.employee = {};
  angular.copy(EmployeeService.get(), $scope.employee);
  $scope.selectedEducationInfo = {};

  $scope.saveEmployee = function () {
    EmployeeService.save($scope.employee);
  };

  $scope.viewQualificationDetails = function (educationInfo) {
    angular.copy(educationInfo, $scope.selectedEducationInfo);
  };

  $scope.updateQualificationDetails = function () {
    //Update the record by finding the source in the original copy of educationalInfo
    var eI = $scope.employee.educationalInfo[0];
    angular.copy($scope.selectedEducationInfo, eI);
  };
}
