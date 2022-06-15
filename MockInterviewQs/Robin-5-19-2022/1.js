// Question: Given a map of employee to manager. Print out an employee tree with CEO on top, direct reports under, etc. 

// 

const employeeMap = {
    'employee1': "manager1",
    'employee2': "manager2",
    'employee3': 'manager1',
    'manager1': 'manager2',
    'manager2': null,
}

class Node {
    constructor(data) {
        this.name = data
        this.parent = null
        this.child = []
    }

    addChild(data) {
        this.child.push(data)
    }

    setParent(data) {
        this.parent = data
    }

    getParent() {
        return this.parent
    }

    getChild() {
        return this.child
    }
}

    //One Root, multiple branches 

    // Find the null value for the key value pair in the test example to establish root
    // Once root is found, find the direct reports
    // Make a node for each key pair, set parent to value


    //  Solution
    // First run through hash and make nodes, second pass 

function employeeTree(hash) {
    const employeeHash = {} 
    for (const employee in hash) {
        if(!employeeHash[employee]) {
            const employeeNode = new Node(employee)
            // 
            const managerNode = new Node(hash[employee])
            employeeNode.setParent(managerNode)
            managerNode.addChild(employeeNode)

            
            employeeHash[hash[employee]] = managerNode
            employeeHash[employee] = employeeNode
        } 
        console.log(employeeHash)
        
    }
}


console.log(employeeTree(employeeMap))

