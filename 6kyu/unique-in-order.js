//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other 
//and preserving the original order of elements.

var uniqueInOrder = iterable => {
    //your code here - remember iterable can be a string or an array
    let unique = []
    for (let i=0; i<iterable.length; i++) {
      if (iterable[i] !== iterable[i+1]) {
        unique.push(iterable[i])
      }
    }
    return unique
  }
  
  uniqueInOrder([1,2,2,3,3])//, [1,2,3]