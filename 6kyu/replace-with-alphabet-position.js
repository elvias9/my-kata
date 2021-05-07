// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//use charCodeAt to have the ASCII code of each letter
//since alphabet starts at 97 in ASCII (a=97) and end at 122(z=122)
//to have the position we substract 96 to ASCII code

function alphabetPosition(text) {
    let stringOfNumbers = []
    for (let i=0; i<text.length; i++) {
      const ascii = text[i].toLowerCase().charCodeAt()
      //console.log(ascii)
      //this is too specify the alphabet range 
      if (ascii >=97 && ascii <=122 && ascii) stringOfNumbers.push(ascii-96)
    }
    return stringOfNumbers.join(' ')
  }
  
  alphabetPosition("The sunset sets at twelve o' clock.")//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
  
  //another solution
  function alphabetPosition(text) {
    let char = text.toLowerCase().replace(/[^a-z]/g,"");
    return [...char].map(x => x.charCodeAt() - 96).toString().replace(/,/g, " ")
  }