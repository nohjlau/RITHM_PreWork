/*
015 - Shift

Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.
Do not use the built in shift function!

Examples:
var arr = ["a","b","c"];
shift(arr); // "a"
arr; // ["b","c"]

var emptyArr = [];
shift(emptyArr); // undefined
emptyArr.length; // 0
*/

function shift(arr) {
    let removed = arr[0];
    for (x=0; x<arr.length; x++) {
      arr[x] = arr[x+1];
    }
    if (arr.length > 0)
      arr.length -= 1;
    return removed;
  }