/*
014 - unshift

Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.
This function should return the new length of the array.
Do not use the built in Array.unshift() function!

Examples:
var arr = [1, 2, 3];
unshift(arr, 0); // 4
arr; // [0, 1, 2, 3]

unshift([4, 5, 6], 10); // 4
*/

function unshift(arr, value) {
    for(x = arr.length; x > 0; x--) {
      arr[x] = arr[x-1];
    }
    arr[0] = value;
    return arr.length;
  }