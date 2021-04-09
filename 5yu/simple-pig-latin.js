//Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
//Leave punctuation marks untouched.

function pigIt(str){
    let array = str.split(' ')
    let newEl = []
    array.forEach(el => {
      if (el !== '!' && el !== '?' && el !== '.') {
        //the first substring remove the first character, because it doesn't have the second index
        //the second substring returns the part of the string between the start and end indexes, therefore only the first char
        //then we add the 'ay' to the end
        newEl.push(el.substr(1)+el.substr(0,1)+'ay')
      } else {
        newEl.push(el)
      }   
    })
    return newEl.join(' ')
  }
  
  
  
  pigIt('O tempora o mores !')// output: 'Oay emporatay oay oresmay !'