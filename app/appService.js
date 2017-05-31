app.factory('appService', function(){

    var getEmployee = function(id){
      if(id == 123){
              return {
                    id: 123,
                    fullName : "Itachi Uchiha",
                    notes : "A Uchiha clan member, a former ambu shinobi and an actual Akatsuki member",
                    department : "Uchiha",
                    dateHired : "July 11 2015",
                    perkCar : true,
                    perkStock : false,
                    perkSixWeeks : true,
                    payrollType : "none"

                    };
      }else{
          return undefined;
      }
    };

    var insertEmployee = function(newEmployee){
        return true;
    };

    var updateEmployee = function(employee){
        return true;
    };

    return{
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee
    };
});
