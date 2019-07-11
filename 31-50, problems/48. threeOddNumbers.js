/*
048 - threeOddNumbers

Write a function called threeOddNumbers, which accepts an array of numbers 
and returns true if any three consecutive numbers sum to an odd number.

Examples:

threeOddNumbers([1,2,3,4,5]) // true
threeOddNumbers([0,-2,4,1,9,12,4,1,0]) // true
threeOddNumbers([5,2,1]) // false
threeOddNumbers([1,2,3,3,2]) // false
*/

function threeOddNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i+2] !== undefined) {
        console.log(arr[i]);
        sum = arr[i] + arr[i+1] + arr[i+2];
        if (sum % 2 !== 0)
          return true;
      }
    }
    return false;
}