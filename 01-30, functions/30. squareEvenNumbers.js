/*
030 - squareEvenNumbers

Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.

Examples:

squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); // 0
squareEvenNumbers([5, 6, 7]); // 36
*/

function squareEvenNumbers(arr) {
    let sumsquared = 0;
    for(i = 0; i < arr.length; i++) {
      if( arr[i] % 2 === 0)
        sumsquared += arr[i]*arr[i];
    }
    return sumsquared;
}