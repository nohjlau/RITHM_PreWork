/*
007 - Rerpeat

Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

Examples:
//repeat('Matt', 3); // 'MattMattMatt'
//repeat('Elie', 2); // 'ElieElie'
repeat('Michael', 0); // ''
*/

function repeat(s, i) {
  var x = 0;
  var output = "";
  while (x <  i) {
    output = output + s;
    x++;
  }
  return output;
}