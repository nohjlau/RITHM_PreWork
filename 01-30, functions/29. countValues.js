/*
029 - countValues

Write a function called countValues which accepts an array and a number 
and returns the number of times that value appears in the array. 

Examples:
countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0
*/

function countValues(arr, num) {
    let counter = 0;
    if(arr.length === undefined || arr[0] === undefined)
      return 0;
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === num)
        counter++;
    }
    return counter;
}