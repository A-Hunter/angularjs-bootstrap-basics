
var app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/home",{
            templateUrl: "app/home.html",
            controller: "homeController"
        })
        .when("/newEmployeeForm",{
            templateUrl: "app/employee_form/appTemplate.html",
            controller: "appController"
        })
        .when("/updateEmployeeForm/:id",{
            templateUrl: "app/employee_form/appTemplate.html",
            controller: "appController"
        })
        .otherwise({
            redirectTo: "/home"
        })
})
