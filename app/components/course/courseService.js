/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

//Get data from real service
var courseService = function ($http) {
    this.get = function () {
        this.course = this.course || intialize();
        return this.course;
    };

    this.save = function (course) {
        this.course = course;
    };

    //If course data not present get it from service (Web API)
    var intialize = function () {
        var course = { 'myCourses': [], 'availableCourses': [] };
        course.myCourses.push(getDummyCourses('Azure IOT', 'Azure Cloud Services Platform For IOT', '9am to 12Pm', 'External', '24/10/2016', '30/10/2016'));
        course.availableCourses.push(getDummyCourses('ASP.NET', 'ASP.NET 4.0', '9am to 12Pm', 'External', '10/08/2016', '20/08/2016'));
        course.availableCourses.push(getDummyCourses('Azure IOT', 'Azure Cloud Services Platform For IOT', '9am to 12Pm', 'External', '24/10/2016', '30/10/2016'));
        return course;
    };

    var getDummyCourses = function(name, summary, timings, speaker, startDate, endDate) {
        var course =
            {
                name: name,
                summary: summary,
                timings: timings,
                speaker: speaker,
                startDate: startDate,
                endDate: endDate
            };
        return course;
    }
}


