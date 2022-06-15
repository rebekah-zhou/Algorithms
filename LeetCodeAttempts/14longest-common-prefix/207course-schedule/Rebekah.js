// test case 1
// numCourses = 2, prerequisites = [[1,0],[0,1]]

// test case 2
const numCourses = 4 
const prerequisites = [[2,0], [0,1], [1,2], [2,3], [3,0], [0,3]]

var canFinish = function(numCourses, prerequisites) {

    function checkTransitivity(firstNum, lastNum) {
        prerequisites.find(prereq => [lastNum][firstNum]
    }
    
    function checkMatch(a, b) {
        return prerequisites[a][1] === prerequisites[b][0]
    }


}
canFinish()