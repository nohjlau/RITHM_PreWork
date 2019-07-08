/*
025 - every

Write a function called every which accepts an array and a callback function. The function should return true if all values in the array passed to the callback return true, otherwise return false.
Do not use the built in every function, the tests will fail!

Examples:
every([1, 2, 3, 4, 5], function(val) {
 return val > 0;
}); // true

every([1, 2, 3, 4, 5], function(val) {
 return val < 2;
}); // false
*/

function every(arr, func) {
    for(i = 0; i < arr.length; i++) {
      if (func(arr[i]) !== true) {
        return false;
      }
    }
    return true;
  }