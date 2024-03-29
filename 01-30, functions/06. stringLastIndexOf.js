/*
006 - stringLastIndexOf

Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
The function should return the last index at which the character exists or -1 if the character is not found.
Do not use the built in String.lastIndexOf() function!

Examples:
stringLastIndexOf('awesome', 'e'); // 6
//stringLastIndexOf('awesome', 'z'); // -1
*/
//len-1
//if s2 > len then return -1

function stringLastIndexOf(s1, s2) {
  var i;
  for (i = s1.length; i > 0; i--) {
    if (s1[i] == s2)
      return i;
  }
  return -1;
}

