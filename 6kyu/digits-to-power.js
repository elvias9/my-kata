//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//we want to find a positive integer k, if it exists, such as the sum of the digits of n taken 
//to the successive powers of p is equal to k * n.

// es. 89 --> 8¹ + 9² = 89 * 1
//695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//If it is the case we will return k, if not return -1.

//I created an array of numbers and set the sum of their digits equals to the element
//to the power of (p + index where we are at)

function digPow(n, p){
    let k
    let sumOfDigits = 0
    let array = n.toString().split('').map(el => {
      return Number(el)
    })
   for (let i=0; i<array.length; i++) {
      sumOfDigits += Math.pow(array[i], p+i)
   }
    if(sumOfDigits % n === 0) {
      k = sumOfDigits / n
    } else {
      k = -1
    }
    return k
  }
  
  digPow(89, 1)// , 1