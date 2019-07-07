/*
004 - stringIncludes

Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. 
The function should return true if the first string includes the character, otherwise it should return false.
Do not use the built in String.includes() function!

Example:
stringIncludes('awesome', 'e'); //true
*/

function stringIncludes(s1, s2) {
  var i;
  for (i = 0; i < s1.length; i++) {
    if (s1[i] == s2)
      return true;
  }
  return false;
}


