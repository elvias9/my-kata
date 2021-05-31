//A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

//Write a function:

//that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

//For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//N is an integer within the range [1..2,147,483,647].


function solution(N) {
    //binary representation of N
    const binary=N.toString(2)
    //identifying an ending point in order to consider only zeros between '1'
    const endPoint = binary.lastIndexOf('1')
    //console.log(binary)
    //set the initial counter to count the zeros in gaps
    let maxGap = 0
    //set a variable to keep tracks of the gap
    let gap 
    //loop backward starting from last '1'
    for(let i= endPoint; i> 0; i--){
      //console.log(binary[i])
      //if the value is '1' reset the counter to zero
      if(binary[i] === '1') gap = 0
      //else add to the counter and 
      //if the current gap is greater than the initial counter, set the counter equal to gap and return it
      //this stops the function
      if(binary[i] === '0') {
        gap ++
        if(gap>maxGap) maxGap = gap
      }
      //console.log(gap)
    }
    return maxGap
  }
  
  solution(1041)//5
  //805306373 // 25
  //328 //2
  //1162 //3
  //51712 //2
  //1610612737 //28