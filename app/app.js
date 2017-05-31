
var app = angular.module('app', ['ngRoute','ui.bootstrap']);

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
});
app.controller("homeController", function($scope, $location, $modal, appService){

    $scope.showCreateEmployeeForm = function(){
//        $location.path("/newEmployeeForm");
        $modal.open({
            templateUrl: 'app/employee_form/appTemplate.html',
            controller: 'appController'
        });
    };

    $scope.showUpdateEmployeeForm = function(id){
        $location.path("/updateEmployeeForm/"+id)
    };
})

