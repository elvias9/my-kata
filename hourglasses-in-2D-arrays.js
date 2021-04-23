//There are 16 hourglasses in arr. 
//An hourglass sum is the sum of an hourglass' values. 
//Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
//The array will always be 6x6.

//In the test sample, for instance, there are these hourglasses:

//1 1 1  1 1 0
// 1       0
//1 1 1  1 1 0

// 0 1 0
//   1
// 0 0 2   etc...



function hourglassSum(arr) {
    let hourglasses= []
    let sums
    for(let i =0; i< arr.length; i++) {
      for(let j =0; j < arr[i].length; j++) {
          if (i <= (arr.length-3) && j <= (arr[i].length -3)) {
          sums=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
            hourglasses.push(sums)
        } 
      }
    }
    hourglasses.sort((a,b)=> a-b)
  return hourglasses[hourglasses.length-1]
  }
  
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ]) //19