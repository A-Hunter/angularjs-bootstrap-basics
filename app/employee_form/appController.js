app.controller('appController',
  function appController($scope, $window, appService){
    $scope.employee = appService.employee;

    $scope.editableEmployee = angular.copy($scope.employee);

    $scope.departments = [
        "Chonen",
        "Ginning",
        "Ambu",
        "Hokage",
        "Uchiha"
    ];

    $scope.submitForm = function(){
         $scope.employee = angular.copy($scope.editableEmployee);
         $window.history.back();
    };

    $scope.cancelForm = function(){
        $scope.employee = $scope.editableEmployee;
        $window.history.back();
    };
})
