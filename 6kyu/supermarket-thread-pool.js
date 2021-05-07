//There is a queue for the self-checkout tills at the supermarket. 
//Your task is write a function to calculate the total time required for all the customers to check out!

function queueTime(customers, n) {
    let waitingTime = new Array(n).fill(0);
   for (let time of customers) {
     let i = waitingTime.indexOf(Math.min(...waitingTime));
     //console.log(i)
     waitingTime[i] += time;
     //console.log(waitingTime[i])
   }
   return Math.max(...waitingTime);
 }
 
 queueTime([2,2,3,3,4,4], 2)//, 9
 
 // create a new array and initially fill it with zeros
 // Then sets i to the index of the lowest value.
 // let i = [0,0,0,0,0].indexOf(Math.min([0,0,0,0,0])); 
 // While looping over customers array waitingTime[0] += time becomes [2,0,0,0,0] for time === 2
 // let i = [2,0,0,0,0].indexOf(Math.min([2,0,0,0,0])); 
 // return the max waitingTime