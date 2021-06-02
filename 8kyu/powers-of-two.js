//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
//cioè 2 elevato agli esponenti che vanno da 0 ad n incluso

//I used an object to improve performance with big numbers


function powersOfTwo(n){
    let array = new Array()
    for(let i=0; i<=n; i++){
      array.push(i)
    }
    let map = {}
    for(let i=0;i<array.length;i++){
      map[array[i]] = 2**array[i]
    }
    return Object.values(map) 
  }
  
  powersOfTwo(4)//, [1, 2, 4, 8, 16])