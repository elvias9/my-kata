function partsSums(ls) {
    let sumOfParts = ls.reduce((a, b) => a + b, 0)
     let result  = [sumOfParts]
     for (let i = 1; i <= ls.length; i++){
       console.log(ls[i-1])
         sumOfParts -= ls[i-1]
         result.push(sumOfParts)
     }
     return result
 }
 
 ls = [1, 2, 3, 4, 5, 6] 
 partsSums(ls)//[21, 20, 18, 15, 11, 6, 0]