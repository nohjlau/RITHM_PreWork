/*
040 - findTheDuplicate

Write a function called findTheDuplicate which accepts an array of numbers containing 
a single duplicate. The function returns the number which is a duplicate or undefined 
if there are no duplicates.

Examples:
findTheDuplicate([1,2,1,4,3,12]) // 1
findTheDuplicate([6,1,9,5,3,4,9]) // 9
findTheDuplicate([2,1,3,4]) // undefined

x*y time complexity because we need nested for loops to scan for duplicates
*/

findTheDuplicate = arr => {
    for ( let i = 0; i < arr.length; i++) {
      for( let x = arr.length; x > 1; x--) {
        console.log( i + " " + x);
        if(arr[i] === arr[x])
          return arr[x];
      }
    }
};