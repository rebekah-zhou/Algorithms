// Question: give hash map of employees to managers, return number of direct reports to each manager

const employees = {
    "employee1": "manager1", 
    "employee2": "manager2",
    "employee3": "manager1"
}



// Make hash map with key as manager names, and value as array of employee names
// For loop, push each employee name into the array 

function numOfDirectReports(employeeHash) {
    const newHash = {}
    for (const employee in employeeHash) {
        if (newHash[employeeHash[employee]]) {
            newHash[employeeHash[employee]]++
        } else {
            newHash[employeeHash[employee]] = 1
        }
    }

    return newHash;
}

console.log(numOfDirectReports(employees))