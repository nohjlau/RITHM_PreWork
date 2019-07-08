/*
Write a function called countIf which accepts an array and a callback function. The callback function will return a boolean comparison to its val parameter.
The function should return a count of the number of times the callback returns true when passed each value in the array.

Examples:
countIf([1, 2, 3, 4, 5], function(val) {
 return val > 4;
}); // 1

countIf([2, 4, 6, 7], function(val) {
 return val % 2 === 0;
}); // 3

countIf(['Tim', 'Matt', 'Elie'], function(val) {
 return val.length > 3;
}); // 2
*/

function countIf(arr, func) {
    let counter = 0;
    for(i = 0; i < arr.length; i++) {
      if(func(arr[i]) === true)
        counter++;
    }
    return counter;
  }

/* Solution Notes
This code could have been simplified by using the the function filter:

function countIfWithFilter(arr, callback) {
  return arr.filter(callback).length;
}
*/