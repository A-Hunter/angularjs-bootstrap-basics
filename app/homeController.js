app.controller("homeController", function($scope, $location, appService){
    $scope.showCreateEmployeeForm = function(){
        $location.path("/newEmployeeForm");
    };

    $scope.showUpdateEmployeeForm = function(id){
        $location.path("/updateEmployeeForm/"+id)
    };
})
