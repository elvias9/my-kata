// Given a string of DNA symbols
// return a string denoting the reverse complement of s
// es. ACCGGGTTTT
// reverse the string TTTTGGGCCA
// replace each char by its complement AAAACCCGGT
// A complement T
// C complement G

function dnaComplement(s) {
    let reverseComplement = ''
    let reversedStr = s.split('').reverse().join('')
    //console.log(reversedStr)
    let complement = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}
    return reverseComplement = reversedStr.replace(/[ATCG]/g, char => complement[char]);
  }
  
  dnaComplement('ACCGGGTTTT')//AAAACCCGGT
  //dnaComplement('ATGC')//GCAT