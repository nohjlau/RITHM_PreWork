/*
033 - twoHighest

Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array. 
The returned value should be an array in the following format: [secondHighest, highest]
The order of the numbers passed in could be any order.
Do not use the build in sort() method - the tests will fail!

Examples:
twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2];

Credit - https://www.codewars.com/kata/two-oldest-ages-1
*/

function twoHighest(arr) {
    let second = arr[0];
    let highest = arr[0];
    let temp = arr[0];
    
    for( i=0; i<arr.length; i++) {
      if(second < arr[i])
        second = arr[i];
      if(highest < second) {
        temp = highest;
        highest = second;
        second = temp;
      }
    }
    return [second, highest];
  }