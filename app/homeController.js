app.controller("homeController", function($scope, $location, appService){
    $scope.addNewEmployee = function(){
        $location.path("/newEmployeeForm");
    }
})
