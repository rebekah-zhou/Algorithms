/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    // let n = graph.length
    // create possiblePathsArr
    
    // create recursive function
    // if node == null return
    
    // starting with zero, (for each) go through each edge 
    // push edge to currPathArr
        // if edge is == to n-1 
            // push to possiblePathsArr
        // else 
            // recursive call with currPathArr, node
    
    const n = graph.length
    const possiblePathsArr = []
    
    findPaths(graph[0])
    
    function findPaths(nodeEdges, currPathArr=[0]) {
        nodeEdges.forEach(edge => {
            const copyOfCurrPathArr = [...currPathArr]
            copyOfCurrPathArr.push(edge)
            if (edge === n-1) {
                possiblePathsArr.push(copyOfCurrPathArr)
            } else {
                findPaths(graph[edge], copyOfCurrPathArr)
            }
        })
    }
    
    return possiblePathsArr
};