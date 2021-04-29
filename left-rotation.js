//A left rotation operation on an array shifts each of the array's elements unit to the left. 
//For example, if 4 left rotations are performed on array 1 2 3 4 5, 
//then the array would become 5 1 2 3 4
//Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
//Given an array of integers and a number of rotations, perform left rotations on the array. Return the updated array 

function rotLeft(a, d) {
    let i = 0;
    //console.log(i<d)
   while (i < d) {
      a.push(a.shift())
     i++
   }
  return a
  }
  
  rotLeft([33,47,70,37,8,53,13,93,71,72,51,100,60,87,97], 13)//87 97 33 47 70 37 8 53 13 93 71 72 51 100 60