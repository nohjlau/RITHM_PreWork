/*
039 - removeVowels

Write a function called removeVowels which will accept a string and return a 
new string with all the vowels removed. You should not consider "y" to be a vowel.

Examples:
removeVowels("Hello!"); // "Hll!" 
removeVowels("Tomatoes"); // "Tmts" 
removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
removeVowels("aeiou"); // ""
removeVowels("why try, shy fly?"); // "why try, shy fly?"
*/

removeVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = "";
    let vowel_check = false;
    for(i = 0; i < str.length; i++) {
      for(a = 0; a < vowels.length; a++) {
        if(str[i].toLowerCase() === vowels[a]){
          vowel_check = true;
        }
      }
      if(vowel_check === false) {
        result = result + str[i];
      }
      vowel_check = false;
    }
    return result;
  };
  
  removeVowels("Tomatoes"); // "Tmts"
  removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"