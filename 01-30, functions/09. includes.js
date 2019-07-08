/*
009 - includes

Write a function called includes, which accepts an array and a number. 
The function should return true if the value exists in the array and false if it does not. 
Do not use the built in Array.includes() function!
*/

function includes(arr, number) {
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === number) 
        return true
    }
    return false;
  }