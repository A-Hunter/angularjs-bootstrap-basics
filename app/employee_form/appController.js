app.controller('appController', function appController($scope, appService){
    $scope.employee = appService.employee;
})
