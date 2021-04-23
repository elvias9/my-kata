//Write a function that will find all the anagrams of a word from a list. 
//You will be given two inputs a word and an array with words. 
//You should return an array of all the anagrams or an empty array if there are none. For example:



function anagrams(word, words) {
    return words.filter(el => {
      return el.split('').sort().join('') === word.split('').sort().join('');
    });
  }
      
   
  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])// => ['aabb', 'bbaa']