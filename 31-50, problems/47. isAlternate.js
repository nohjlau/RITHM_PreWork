/*
047 - isAlternate

Create a function isAlt that accepts a string as an argument 
and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples:
isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true

Credit - https://www.codewars.com/kata/are-we-alternate
*/

isAlt = str => {
  let vowels = {
    'a':1,
    'e':1,
    'i':1,
    'o':1,
    'u':1
  }
  let isVowel = false;
  
  for(let i=0; i < str.length; i += 2) { //even
    for(key in vowels) {
      if(key == str[i] && key != str[i+1]){
        
        isVowel = true;
      }
    }
    if(isVowel === false) //check odd
       for(key in vowels) {
      if(key == str[i+1] && key != str[i+2]){
        
        isVowel = true;
      }
      if(isVowel === false) //if still false, return false;
        return false;
    }
      
    isVowel = false;
  }
  return true;
};
  

/* Solution Notes
These last couple problems on the prework are pretty challenging because you kind of have to have the proper logic and know the functions available to manipulate the code.

Here is the elegant and beautiful model solution:

function isAlt(word) {
  var vowels = ['a','e','i','o','u'];
  
  for (var i = 1; i < word.length; i++) {
    if ((vowels.indexOf(word[i-1]) >= 0 && vowels.indexOf(word[i]) >= 0) || 
        (vowels.indexOf(word[i-1]) === -1 && vowels.indexOf(word[i]) === -1)) {
      return false;      
    }
  }
  return true;
}
*/