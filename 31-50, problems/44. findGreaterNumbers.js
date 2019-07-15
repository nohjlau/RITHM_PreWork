/*
044 - findGreaterNumbers

Write a function called findGreaterNumbers which accepts an array and 
returns the number of times a number is followed by a larger number. 
Note that the numbers don't need to be next to each other in the array.
Any pair where the second number comes later in the array and is also
the larger number should count.

Examples:
findGreaterNumbers([1,2,3]) // 3 (2 > 1, 3 > 2, and 3 > 1)
findGreaterNumbers([6,1,2,7]) // 4
findGreaterNumbers([5,4,3,2,1]) // 0
findGreaterNumbers([]) // 0
*/

function findGreaterNumbers(arr) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
      for(let x = i; x < arr.length;x++) {
        if(arr[i] < arr[x]) {
          counter++;
          console.log(`${arr[i]} ${arr[x]}`);
        }
      }
    }
    return counter;
  }