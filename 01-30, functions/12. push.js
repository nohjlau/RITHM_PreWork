/*
012 - push.js

Write a function called push which accepts two parameters, an array and any value. 
The function should add the value to the end of the array and then return the new length of the array.
Do not use the built in Array.push() function!

Examples:
var arr = [1, 2, 3];
push(arr, 10); // 4

arr; // [1, 2, 3, 10]

var secondArr = [5, 2, 1, 6];
push(secondArr, 20); // 5

secondArr; // [5, 2, 1, 6, 20]
*/


function push(arr, e) {
  arr[arr.length] = e;
  return arr.length;
}

