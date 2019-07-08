/*
026 - some

Instructions from your teacher:
Write a function called some which accepts an array and a callback function. 
The function should return true if any value in the array passed to the callback returns true, otherwise return false.
Do not use the built in some function, the tests will fail!

Examples:

some([1, 2, 3, 4, 5], function(val) {
 return val > 5;
}); // false

some([1, 2, 3, 4, 5], function(val) {
 return val < 2;
}); // true
*/

function some(arr, func) {
    for(i = 0; i < arr.length; i++) 
        if(func(arr[i] === true))
        return true
    return false;
}