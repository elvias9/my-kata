// JUMPS OF PAWN

//Given an array A, with dimension N, 1<=N<=100000, A[N] within range of [-100000, 100000]. At first there is a pointer at position K (in the beginning K=0), and M=A[K], 
//and we say the pointer will jump to position A[K+M], and call this a "jump of a pawn`. 

// e.g. given array A = [2, 3, -1, 1, 3] the pawn always start from position A[0] and its jump is equal to 0+A[0] (so it jumps to position A[2], then 2+A[2], etc.)

//returns the number of jumps after which the pawn will be out of the array
//return -1 if the pawn never jump outside


function solution(A) {
    let jumps = []
    let i = 0
    
    do { 
    i= i+A[i]
    jumps.push(A[i])
      if (jumps.length >= A.length) {
        return -1}
    } while (i<=A.length)
       
      return jumps.length
    
  }
  
  solution( [2, 3, -1, 1, 3])// 4


// NUMBER OF COMPLEMENTARY PAIRS
//Given Target Integer K and a non-empty Array of positive Integers N
//returns the number of K complementary pair - 
//which means the value of one index plus the value of another index should be equal the K 
//   Return the count of the pairs at the end

function findPairs(K, A) {
    let counter = 0
    //create an object of key-value pairs
    //to check if the element in the array is duplicate
    let duplicate = {}
    A.forEach(el => {
    //if the element doesn't exist, create an entry in the object
      if(!duplicate[el]) {
        return duplicate[el] = 1
        //if the element exists, add 1 to the value
      } else {
      duplicate[el] ++ 
      }
    })
     // console.log(duplicate)
    Object.keys(duplicate).forEach(key => {
      let difference = K-key
      //if difference is a key in duplicate (this evaluate to true)
      if (difference in duplicate) {
        //console.log(duplicate[key])
        //console.log(duplicate[difference])
        counter += duplicate[key] * duplicate[difference]
      }
    })
    return counter
  }
  
  
  findPairs(6, [1,8,-3,0,1,3,-2,4,5])// 7*/