/*
019 - slice

Write a function called slice, which accepts an array, and two numbers.
The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.
If a third parameter is not passed to the function, it should slice until the end of the array by default.
If the third parameter is greater than the length of the array, it should slice until the end of the array.
Do not use the built in Array.slice() function!

Examples:
slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
*/

function slice(arr, num1, num2) {
    let arr2 = [];
    let counter = 0;
    if (typeof num2 === 'undefined')
        num2 = arr.length;
    for (i = num1; i < num2; i++) {
        if (i >= arr.length)
        break;
        arr2[counter] = arr[i];
        counter++;
    }
    return arr2;
}

/* Solution Notes
You can combine the two checks for if the end value is undefined or too long using a single statement

  if (end === undefined || end > arr.length) {
    end = arr.length;
  }
*/