//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//change the data structure from string to object to improve performance with very long strings
// set a counter to compare the two objects
//if the value of obj1[key] is higher or equal to obj2[key]
//so if that character is included in obj2
//increment the counter by the value of obj2[key]
//if the counter is equal to str2.length, then the string can be rearranged

function scramble(str1, str2) {
    let counter = 0
    let obj1 = str1.split('').reduce((acc, char) => {
        if(acc[char] === undefined) acc[char] = 1
        else acc[char] ++
          return acc
    }, {})
    //console.log(obj1)
    let obj2 = str2.split('').reduce((acc, char) => {
        if(acc[char] === undefined) acc[char] = 1
        else acc[char] ++
          return acc
    }, {})
      //console.log(obj2)
      for (let el in obj2) {
        if(obj1[el] >= obj2[el]) counter += obj2[el]
      }
     // console.log(counter)
      if (counter === str2.length) return true
      else return false
    }
    
    scramble('rkqodlw','world')//,true
    scramble('jscripts','javascript')//,false
    scramble('sst','tsss')//,false
    scramble('aabbcamaomsccdd','commas')//,true