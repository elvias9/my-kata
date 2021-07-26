//Find the largest sum of contiguous subarray within an array

//The Kandane’s algorithm uses optimal substructures and overlapping sub-problems with bottom-up approach by tabulation.

let maxSequence = (arr) => {
    let maxSum = 0
 let currentSum = 0
 for(let i = 0; i < arr.length; i++){ 
     //add to currentSum while looping and compare current index with currentSum. We store the max between the two
    currentSum = Math.max(arr[i], currentSum + arr[i])
     //console.log(currentSum)
     //compare maxSum with currentSum and store the greater value
     maxSum = Math.max(currentSum, maxSum)
     
 }
 return maxSum
}

maxSequence([-2, 1,-3, 4,-1, 2, 1,-5, 4])//, 6)