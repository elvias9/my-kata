//return an array with first biggest, first smaller, second largest, second smallest

function meanderingArray(unsorted) {
    let sorted = unsorted.sort((a,b) => b-a)
    //set a flag variable to control which element to push
    let flag = true
    let i=0
    let j=sorted.length-1
    let meanderedArray = []
    while(i<=j) {
      if(flag) {
      meanderedArray.push(sorted[i])
       i++
      } else {
      meanderedArray.push(sorted[j])
       j--
      }
      //at the end of each iteration, set the value of flag to its contrary, in order to control the push flow
      flag = !flag
     // console.log(i, j, meanderedArray, flag)
    }
    return meanderedArray
  }
  
  meanderingArray([5,2,7,8,-2,25,25])//[25,-2,25,2,8,5,7]