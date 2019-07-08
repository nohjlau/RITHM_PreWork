/*
027 - filter

Write a function called filter which accepts an array and a callback function. 
The callback takes a single parameter called val and return a boolean based 
on some comparison to the value.
The function should return an array of all values that pass the comparison test.
Do not use the built in filter function, the tests will fail!

Examples:
var arr = [1, 2, 3, 4, 5];

filter(arr, function(val) {
 return val > 3;
}); // [4,5]

filter(['a', 1, '2', 3], function(val) {
 return typeof val === 'string';
}); // ["a","2"]

filter([1, 2, 3, 4, 5], function(val) {
 return typeof val === 'string';
}); // []
*/

function filter(arr, func) {
    let new_arr = [];
    for(i = 0; i < arr.length; i++) {
      if(func(arr[i]))
        new_arr.push(arr[i]);
    }
    return new_arr;
  }