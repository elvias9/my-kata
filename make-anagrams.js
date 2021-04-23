function makeAnagram(a, b) {
    //I create the object map assigning char of a as keys
    //aCount counts if the char in a is also in b
    //bCount counts the chars deleted in b
      let map = {}, aCount = 0, bCount = 0;
    //if the key appears for the first time in the object, I assign 
    //value 1 to it.
    //if the key is already there, I increment the value 
      for (let i = 0; i < a.length; i++) {
          if (!map[a[i]]) {
              map[a[i]] = 1;
          } else {
              map[a[i]] ++;
          }
      }
    //console.log(map)
      for (let j = 0; j < b.length; j++) {
        //I check if map contains the characters in b. If yes,
        //I increment aCount and decrement the value of that key in map 
        //because characters in a and b match together
        //console.log(!map[b[j]])
          if (map[b[j]]) {
              aCount ++;
              map[b[j]] --;
        //if map doesn't contain char in b, I increment the bCount
            console.log(map[b[j]])
          } else {
              bCount ++
          }
      }
    //To return the number of deleted char, I return the length of A minus the number of matches 
    //plus the count of element in b that don't match a
      return ((a.length - aCount) + bCount);
  }
  
  makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')//30