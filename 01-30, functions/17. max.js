/*
017 - max

Write a function called max, which accepts an array and returns the highest value. 
Do not use the built-in Math.max() function!

Examples:
max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6
*/

function max(arr) {
  let largest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest)
      largest = arr[i];
  }
  return largest;
}