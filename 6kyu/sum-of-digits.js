// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// we want to reduce until the sum is equal to 9
// the while loop let us execute a function if a condition is true
// set the sum equal to the initial parameter
// define all the variables and the reducer function outside the loop 
//return the sum


function digital_root(n) {
    let digitalSum = n
     let array = []
     let reducer = (a,b) => parseInt(a) + parseInt(b)
    
     while (digitalSum > 9) {
        array = digitalSum.toString().split("")
        digitalSum = array.reduce(reducer)
     }
    return digitalSum
  }