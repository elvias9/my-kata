//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

//You will always get a valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//The array will always contain letters in only one case.

function findMissingLetter(array) {
    let missingLetter 
    const stringOfLetters = array.join('')
    for (let i=0; i<stringOfLetters.length-1; i++) {
      if(stringOfLetters.charCodeAt([i +1]) -stringOfLetters.charCodeAt([i]) !== 1) {
        //console.log(stringOfLetters[i])
       //console.log(stringOfLetters.charCodeAt([i]) + 1)
        //String.fromCharCode to return the letter from the ASCII code number
      missingLetter = String.fromCharCode(stringOfLetters.charCodeAt([i]) + 1)
      }
     
    }
      return missingLetter
  }