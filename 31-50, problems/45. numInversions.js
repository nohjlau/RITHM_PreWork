/*
Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.

Implement a function called numInversions which counts the number of inversions in the array.

Examples:

numInversions([]); // 0
numInversions([5]); // 0
numInversions([1,2]); // 0
numInversions([2,1]); // 1
numInversions([1,2,3]); // 0
numInversions([1,3,2]); // 1
numInversions([3,1,2]); // 2
numInversions([3,2,1]); // 3
numInversions([5,3,4,1,2]); // 8
numInversions([1,1,1,1]); // 0
numInversions([2,2,1,1]); // 4
numInversions([3,3,3,2,2,1]); // 11
numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22

Credit - https://www.codewars.com/kata/calculate-number-of-inversions-in-array
*/

function numInversions(arr) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++ ){
      for(let x = i; x < arr.length; x++) {
        if(arr[i] > arr[x])
          counter++;
      }
    }
    return counter;
  }