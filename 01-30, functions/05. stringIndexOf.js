/*
005. stringIndexOf

Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.
The function should return the first index in the word at which the character exists or -1 if the character is not found.
Do not use the built in String.indexOf() function!

Examples:
stringIndexOf('awesome', 'e') // 2
//stringIndexOf('awesome', 'z') // -1
*/

function stringIndexOf(s1, s2) {
  var i;
  for (i = 0; i < s1.length; i++) {
    if (s1[i] == s2)
      return i;
  }
  return -1
}

