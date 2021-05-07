//The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//such as
//F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

//Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
//F(n) * F(n+1) = prod.

//Your function productFib takes an integer (prod) and returns an array:
//[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return:
//[F(n), F(n+1), false] 
// F(m) being the smallest one such as F(m) * F(m+1) > prod.
//Some Examples of Return:
//productFib(714) # should return [21, 34, true], 
//productFib(800) # should return [34, 55, false], 

//my first solution that was not working because with big numbers it goes to an infinite loop and crashes

/*function productFib(prod){
  let matchingResult = []
  let unmatching = []
    let fib = [1, 1];
    for (let i = 2; i < prod; i++) {
        fib[i] = fib[i - 2]+ fib[i - 1];
    }
 for (let j=0; j<fib.length; j++) {
     if (fib[j] * fib[j+1] === prod) {
     matchingResult.push(fib[j], fib[j+1], true)
       return matchingResult
   } else if (fib[j] * fib[j+1] !== prod && fib[j] * fib[j+1] > prod) {
     unmatching.push(fib[j], fib[j+1], false)
     return unmatching
   }
 }
}*/

//this is an efficient solution that create a Fibonacci sequence with a while loop with stopping condition 
//f(n) * f(n+1) < prod
function productFib(prod) {
    let n = 0;
  let consecutiveN = 1;  
  while(n*consecutiveN < prod) {
    consecutiveN = n + consecutiveN;
    //console.log(consecutiveN)
    n = consecutiveN - n;
  }
  return [n, consecutiveN, n*consecutiveN===prod];
}

//another solution
/*function productFib(prod){
   let [a, b] = [0, 1];
  while(a * b < prod) {
    [a, b] = [b, a + b]
  };
  return [a, b, a * b === prod];
}*/

productFib(5895)//, [89, 144, false]
//productFib(4895)//, [55, 89, true]