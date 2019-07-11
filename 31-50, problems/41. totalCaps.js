/*
041 - totalCaps

Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.

Examples:
totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0
*/

totalCaps = (arr) => {
    let counter = 0;
    
    for(let i = 0; i < arr.length; i++) {
      for(let s = 0; s < arr[i].length; s++) {
        if(arr[i][s] == arr[i][s].toUpperCase()) {
          console.log(arr[i][s]);
          counter++;
        }
      }
    }
    return counter;
};