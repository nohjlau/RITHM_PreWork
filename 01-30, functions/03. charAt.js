/*
003 - charAt

Write a function called charAt which accepts a string and an index (number) and returns the character at that index. 
The function should return an empty string if the number is greater than the length of the string.

charAt("awesome",2);
*/

 function charAt(s, i) {
   if(s[i] == null)
    return "";
    
   return s[i];
 }
