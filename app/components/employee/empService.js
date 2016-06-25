/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

//Get data from real service
var employeeService = function ($http) {
    this.get = function () {
        this.employee = this.employee || intialize();
        return this.employee;
    };

    this.save = function (employee) {
        this.employee = employee;
    };

    //If employee data not present get it from service (Web API)
    var intialize = function () {
        var employee = { 'personInfo': {}, 'educationalInfo': [] };
        employee.personInfo.name = 'Mayank';
        employee.personInfo.cadre = 'A12';
        employee.personInfo.extension = '3095';
        var eI = new Object();
        eI.degree = 'MCA';
        eI.university = 'Mumbai';
        eI.year = '2010';
        eI.percentage = '72';
        employee.educationalInfo.push(eI);
        return employee;
    };
}



