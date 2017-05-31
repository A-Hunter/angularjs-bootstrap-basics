app.controller("homeController", function($scope, $location, $modal, appService){

    $scope.showCreateEmployeeForm = function(){
//        $location.path("/newEmployeeForm");
        $modal.open({
            templateUrl: 'app/employee_form/appTemplate.html',
            controller: 'homeController'
        });
    };

    $scope.showUpdateEmployeeForm = function(id){
        $location.path("/updateEmployeeForm/"+id)
    };
})
