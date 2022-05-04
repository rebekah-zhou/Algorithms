// Question: Given 3 points, determine if they form a triangle or not.

const pointArr = [(1, 2), (4, 5), (-5, 5)]
const test1 = [1, 2]
const test2 = [4, 5]
const test3 = [-5, 5]

const test4 = [1, 2]
const test5 = [1, 5]
const test6 = [1, 5]

const test7 = [1, 3]
const test8 = [2, 3]
const test9 = [1, 3]

const test10 = [1, 1]
const test11 = [2, 2]
const test12 = [3, 3]

// Triangle inequality, points cannot be on the same line
// 

// Take 2 points, calculate "height", subtract the "y" values
// Take 2 (different points), calculate the base, subtract "x" values
// Follow Up: want to double check the triangle formula used, to make sure it is coded correctly

function isTriangle(pt1, pt2, pt3) {
    const area = 0.5 * Math.abs(pt1[0] * (pt2[1] - pt3[1]) + pt2[0] * (pt3[1] - pt1[1]) + pt3[0] * (pt1[1] - pt2[1]));
    return !!area
}


console.log(isTriangle(test7, test8, test9))
console.log(isTriangle(test1, test2, test3))
