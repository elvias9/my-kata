//In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 1 and 2. 
// That is:
//F [0]= 1 , F [1] = 1 
//and
//F[n] = F [n − 1] + F [n − 2] 
//for n > 1. 

let generateFibonaccis = n  => {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2]+ fib[i - 1];
    }
    return fib.join(' ');
}
generateFibonaccis(10) // '1 1 2 3 5 8 13 21 34 55'