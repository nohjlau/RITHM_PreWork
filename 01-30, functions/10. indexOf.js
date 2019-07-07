/*
010 - indexOf

Write a function called indexOf, which accepts an array and a number. 
The function should return the first index at which the value exists or -1 if the value is not found.
Do not use the built in Array.indexOf() function!

Examples:
//var arr = [5, 10, 15, 20];
//indexOf(arr, 20); // 3

//var arr2 = [1, 2, 3, 4, 5];
//indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1
*/
function indexOf(array, number) {
  for (x = 0; x < array.length; x++) {
    if (array[x] == number)
      return x;
  }
  return -1;
}

