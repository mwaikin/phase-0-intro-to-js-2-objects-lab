let employee = {
    name: "Samson",
    streetAddress: "woodville close",
}
//pdateEmployeeWithKeyAndValu
    function updateEmployeeWithKeyAndValue(employee,key,value){
        return {...employee,[key]:value};
    };
//destructivelyUpdateEmployeeWithKeyAndValue
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee;
    }

    //deleteFromEmployeeByKey
    function deleteFromEmployeeByKey(employee, key){
        let newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee;
    }
    //`destructivelyDeleteFromEmployeeByKe
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        let newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee;
    }
    function deleteFromEmployeeByKey(employee, key){
    }
    
