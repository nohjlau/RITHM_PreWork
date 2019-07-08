/*
018 - min

Write a function called min, which accepts an array of numbers and returns the lowest value. 
Do note use the built-in Math.min() function!

Examples:
min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
*/

function min(arr) {
    var minimum = arr[0];
    for(i = 0; i < arr.length; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
      }
    }
    return minimum;
  }

/* Solution Notes

If the numbers are higher than your default minimum value, then you'll return the wrong number.
A better solution is to set your minimum value to the first array value because then if there
isn't anything smaller then you already have the lowest number. The same is true for max.js
*/