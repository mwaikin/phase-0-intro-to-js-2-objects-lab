let employee = {
	name: "Joseph Mbugua",
	streetAddress: 3454566
}

//this function updates the object without changing the original object 
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };

  newObj[key] = value;

  return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "name",
  "Sam"
);

//updates the object but returns a completely new object 
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
     employee[key] = value;
     return employee;
}

//deleting employee using key without changing original object
function deleteFromEmployeeByKey(employee,key){
	//making a clone of the object
  const newObj = {...employee};
  delete newObj[key];
  return newObj;

}
//deleting employee using key and changing original object 
function destructivelyDeleteFromEmployeeByKey(employee,key){
	delete employee[key];
	return employee;
}