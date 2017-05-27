app.controller('appController', function appController($scope, appService){
    $scope.employee = appService.employee;
    $scope.departments = [
        "Chonen",
        "Ginning",
        "Ambu",
        "Hokage",
        "Uchiha"
    ];
})
