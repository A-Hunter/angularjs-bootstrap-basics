app.controller("homeController", function($scope, $location){
    $scope.addNewEmployee = function(){
        $location.path("/newEmployeeForm");
    }
})
