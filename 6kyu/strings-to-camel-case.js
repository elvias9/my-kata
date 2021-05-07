//Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//eg. "the-stealth-warrior" gets converted to "theStealthWarrior"

function toCamelCase(str){
    const array = str.split('')
    for(let i=array.length-1; i>=0; i--) {
      if (array[i] === '-' || array[i] === '_') {
       array[i+1] = array[i+1].toUpperCase()
        array.splice(i, 1)      
      }
    }
    return array.join('')
  }
  
  toCamelCase("The-Stealth-Warrior")//, "TheStealthWarrior"