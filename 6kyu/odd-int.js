// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

//I loop over the sorted array. If the element is equal to the following I skip the pair and continue to check
//one time is odd

function findOdd(A) {
    let odd = 0
  A.sort((a,b) => a-b)
    console.log(A)
    for(let i=0; i<A.length; i++) {
      if (A[i] === A[i +1]) {
        console.log(A[i])
        //to skip the pair, increment i
        i++
      }else {
        odd = A[i]
      }
    }
     return odd
  }