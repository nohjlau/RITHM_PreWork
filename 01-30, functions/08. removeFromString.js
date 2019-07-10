/*
008 - removeFromString

Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 
The function should return a new string with the characters removed. 

Examples:
removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '
*/

function removeFromString(arr, index, remove_num) {
    let new_string = "";
    let index_end = index + remove_num;
    
    for(i = 0; i < arr.length; i++) {
      if (i < index || i >= index_end) {
        new_string = new_string + arr[i];
      }
    }
    return new_string;
}

/* Solution Notes
Alternative solution is to use array methods.

// converting to an array method
function removeFromStringArr(str, start, removeCount) {
  let arr = str.split('');          // Seperate each character including white space
  arr.splice(start, removeCount);   // Remove items from 'start' to 'removeCount' and return the removed items.
  return arr.join('');              // Join all the characters back together.
}
*/
