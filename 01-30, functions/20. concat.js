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

function concat() {
  const start_args = 1;
  let num_args = 0;
  let new_arr = arguments[0];
  for(i = 0; i <= arguments.length; i++) {
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


/* Solution Notes:
A more elegant solution to the one I've written is to use a nested for-loop so that keeping track of the num_args isn't necessary.
The consequence of doing that is that your nested for-loop has an O(n^2) versus two for-loops, which has O(n). Though, that's not too important here.
There are two alternative solutions using a for-of loop and a ForEach loop
*/