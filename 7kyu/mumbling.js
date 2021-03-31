// The parameter of accum is a string which includes only letters from a..z and A..Z.

//split the string into an array
//map the array using the index as second parameter 
// use the repeat method with index as parameter to return a new array with each element repeated for the number of times represented by its index 
// return a string by joining the elements with a '-' separator

function accum(s) {
  let acc = ''
  let array = s.split('').map((el, index) => {
    return el.toUpperCase() + el.toLowerCase().repeat(index)
  })
  return acc = array.join('-')
  }