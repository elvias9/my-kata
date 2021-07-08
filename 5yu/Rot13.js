// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// my solution : 

function rot13(message){
    let shiftedMessage = []
    for (let i=0; i<message.length; i++) {
      if (message[i].toUpperCase() !== message[i].toLowerCase()) {
        let code = message.toUpperCase().charCodeAt(i)
          let letter = (code-64)+13
          if(letter >26) letter = letter-26
          //console.log(letter)
          if(message[i] === message[i].toUpperCase()) shiftedMessage.push(String.fromCharCode(letter+64))
          else shiftedMessage.push(String.fromCharCode(letter+64).toLowerCase())    } else {
          shiftedMessage.push(message[i])
        } 
    }
   // console.log(shiftedMessage)
    return shiftedMessage.join('')
  }

  //another solution with regex

  function rot13(message) {
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }

rot13("Test!")//Grfg!