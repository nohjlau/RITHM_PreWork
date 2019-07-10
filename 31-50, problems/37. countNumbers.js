/*
037 - countNumbers

Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

Examples:
countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers([]); // 0
countNumbers(['4','1','0','NaN']); // 3
countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4
*/

function countNumbers(arr) {
    let counter = 0;
    for(i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) === false && arr[i] !== '' && arr[i] !== ' ') 
        counter++;
    }
    return counter;
}

/* Solution Notes
Instead of using isNaN(), you could've used parseInt() as a catch all and simplified your if statement.
*/