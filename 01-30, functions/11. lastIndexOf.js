/*
011. lastIndexOf

Write a function called lastIndexOf, which accepts an array and a number.
The function should return the last index at which the value exists, or -1 if the value is not found.
Do not use the built in Array.lastIndexOf() function!

Examples:
lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
*/

function lastIndexOf(arr, n) {
  for (i = arr.length; i >= 0; i--) {
    if (arr[i] == n)
      return i;
  }
    return -1;
}