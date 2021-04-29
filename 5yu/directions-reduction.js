//You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

//In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

//loop over the array of string. If the array[i] + array[i+i] is a needless pair, remove it
//return the array with the needed directions

function dirReduc(arr){
    for(let i=arr.length-1; i>=0; i--) {
      if(arr[i] === 'NORTH' && arr[i+1] === 'SOUTH' || arr[i] === 'SOUTH' && arr[i+1] === 'NORTH') {
        arr.splice(i, 2)
      }
      if(arr[i] === 'WEST' && arr[i+1] === 'EAST' || arr[i] === 'EAST' && arr[i+1] === 'WEST') {
        arr.splice(i, 2)
      }
    }
    return arr
   }
   
   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])//, ["WEST"]
   
   
   //another solution with reduce method
   
   function dirReduc(arr) {
     var opposite = {
       'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
     return arr.reduce((acc, dir) => {
           //console.log(opposite[dir])
           //if element in acc (I access it with acc.length-1 because I have at least one element at each iteration)
       //is equal to the value in the key/value pair in opposite
       //I remove it from acc, if not I push it 
         if (acc[acc.length - 1] === opposite[dir])
           acc.pop();
         else
           acc.push(dir);
       //console.log(acc)
         return acc;
       }, []);
   }