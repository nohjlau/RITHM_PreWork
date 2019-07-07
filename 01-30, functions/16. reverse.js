/*
016 - reverse

Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.
Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm 
Do not use the built in Array.reverse() function!

Examples:
reverse([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
reverse([]); // []

var arr = [1, 2, 3];
reverse(arr); // [3, 2, 1]
arr; // [3, 2, 1]
*/

function reverse(arr) {
  var temp;
  for (x = 0; x < arr.length/2; x++) {
    temp = arr[x];
    arr[x] = arr[arr.length-1-x];
    arr[arr.length-1-x] = temp;
  }
  return arr;
}

/* Solution Notes
Math.floor when finding the midpoint for swapping purposes.
*/