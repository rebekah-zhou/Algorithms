// Question
// Given a directed graph with v nodes, and e directed edges
// given nodes source destination, return number of paths 
// no cycles, multiple edges (not bidirectional), self-loop

// Test Cases
const edges = [[0, 1], [1, 2]]
const source = 0
const destination = 2

// return 1, since there's only one path

// Psuedocode

// implement a graph 
// const graph = { 0: [1, 3, 4],
    //             1: [2]}

// implement vertex

// depth first search 
// implement a visited hash
// for each end node in the array 

// separate function checkNodes
// check if the node exists in graph && not in visited hash
// if it does, 
// add node to visited hash 
// then check if the array contains the destination, numOfPath ++ 

// else function checkNodes 

function findNumOfPaths(edges, source, destination) {
    const graph = {}

    edges.forEach(edge => {
        graph[edge[0]] = [...graph[edge[0]], edge[1]] || [edge[1]]
    })

    const visitedHash = {}
}

function checkNodes(node, graph, visitedHash) {
    if (graph[node] && !visitedHash[node]) {
        visitedHash[node] = 1
    }
}
