// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// 16  -->  1 + 6 = 7
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

// we want to reduce until the sum is equal to 9
// the while loop let us execute a function if a condition is true
// set the sum equal to the initial parameter
// define all the variables and the reducer function outside the loop 
//return the sum


function digital_root(n) {
   let digitalSum = n
    let array = []
    while (digitalSum > 9) {
       array = digitalSum.toString().split("")
      //console.log(array)
       digitalSum = array.reduce((acc, num) => parseInt(acc)+ parseInt(num))
    }
   return digitalSum
}


digital_root(456)//, 6 