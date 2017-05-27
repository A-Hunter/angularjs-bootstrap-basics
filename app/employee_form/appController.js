app.controller('appController',
  function appController($scope, $window, $routeParams, appService){

    if($routeParams.id){
        $scope.employee = appService.getEmployee($routeParams.id);
    }else{
        $scope.employee = { id: 0 };
    }

    $scope.editableEmployee = angular.copy($scope.employee);

    $scope.departments = [
        "Chonen",
        "Ginning",
        "Ambu",
        "Hokage",
        "Uchiha"
    ];

    $scope.submitForm = function(){

        if($scope.editableEmployee.id == 0){
            //insert new employee
            appService.insertEmployee($scope.editableEmployee);
        }else{
            //update the employee
            appService.updateEmployee($scope.editableEmployee);
        }
         $scope.employee = angular.copy($scope.editableEmployee);
         $window.history.back();
    };

    $scope.cancelForm = function(){
        $scope.employee = $scope.editableEmployee;
        $window.history.back();
    };
})
