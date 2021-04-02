//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.
//For instance :  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4

function persistence(num) {
    let persistence = 0;
    while (num.toString().length !== 1) {
      num = num.toString().split("").reduce((a,b)=>a*b);
      persistence++;
    }
    return persistence;
 }
 
 persistence(25)//,2

