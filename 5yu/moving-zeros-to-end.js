//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//loop over the array (I need to loop backward, otherwise I can skip some indexes, because I'm removing when I find a 0)
// if 0, remove from that index and insert at the end
// for instance [0,0,1], if I loop ++ the second 0 is ignored, because when I remove and push to the end [0,1,0] 
//the loop goes to the next index (where is number 1) and ignores the other 0

let moveZeros = function (arr) {
    for (let i=arr.length; i>=0; i--) {
      if(arr[i] === 0) {
        // I write [0] (as it was arr[0]) otherwise it will push [0]
        //insted of 0 at the end of the array)
        //so I'm always pushing the element of the 'spliced' array
        arr.push(arr.splice(i, 1)[0])
      }
    }
  return arr
  }
  
  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]