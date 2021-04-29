//Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

//pyramid(0) => [ ]
//pyramid(1) => [ [1] ]
//pyramid(2) => [ [1], [1, 1] ]
//pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

function pyramid(n) {
    let pyramid = []
     for (let i = 0; i < n; i++) {
         let row = new Array(i +1).fill(1)
         pyramid.push(row)
      // console.log(row)
     }
     return pyramid
 }
 
 //create an array variable
 // push as many subarrays as n
 //each subarray should repeat n n+1 number of times (using fill method to fill each subarray)
 
 pyramid(2)//, [[1], [1, 1]])