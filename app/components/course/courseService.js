/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

//Get data from real service
var courseService = function($http) {
    this.get = function() {
       return  {Name:'Mayank',Age:'28'};
    }
}