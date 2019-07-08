/*
020 - concat

Write a function called concat, which accepts an array, and one, two, or three additional arguments (all of which are arrays). 
The function returns a new array with all of the remaining parameters joined with the array.
Do not use the built in Array.concat() function!

Examples:
concat([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
concat([1, 2, 3], [4], [5, 6]); // [1, 2, 3, 4, 5, 6]
concat([1, 2, 3], [4], [5], [6]); // [1, 2, 3, 4, 5, 6]
concat([1], [[2], [3]], [4]); // [1, [2], [3], 4]]

Hint
if you do not want to hard code the number of arguments, you can use the arguments keyword 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) 
or the spread operator 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
to handle a variable of parameters.
*/

function concat(arr, a, b, c) {
  const max_args = 3;
  const start_args = 1;
  let num_args = 0;
  let new_arr = arr;
  for(i = 0; i <= max_args; i++) {
    if (arguments[i] !== undefined)
      num_args++;
  }
  
  for(i = start_args; i < num_args; i++) { //for loop starts at 1 because argument[0] is our array.
    for(x = 0; x < arguments[i].length; x++) {
      new_arr.push(arguments[i][x]); 
    }
  }
  return new_arr;
}