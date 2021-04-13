//The goal of this exercise is to convert a string to a new string 
//where each character in the new string is "(" if that character appears only once in the original string, 
//or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
    let encoded = []
    for (let i = 0; i < word.length; i++) {
      let array = word.toLowerCase().split('')
      array.splice(i, 1)
      //console.log(array.indexOf(word[i].toLowerCase()) === -1) 
      if (array.indexOf(word[i].toLowerCase()) === -1) encoded.push('(')
      else  encoded.push(')')
    }
  return encoded.join('')
}

duplicateEncode("recede")//,"()()()"

//with map method and lastIndexOf
//The lastIndexOf() method returns the index of the last occurrence of the specified value, searching backwards from fromIndex.

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

