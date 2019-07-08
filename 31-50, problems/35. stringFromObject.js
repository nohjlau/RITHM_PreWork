/*
035 - stringFromObject

Write a function called stringFromObject that generates a string from an object's key/value pairs.
The format should be "key = value, key = value". 
Each key/value pair should be separated by a comma and space except for the last pair.

Examples:
stringFromObject({ a: 1, b: '2' }); 
// "a = 1, b = 2"

stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }); 
// "name = Elie, job = Instructor, isCatOwner = false"

stringFromObject({}); 
// ""

Credit - https://www.codewars.com/kata/building-strings-from-a-has
*/

function stringFromObject(obj) {
    let string = "";
    let length = Object.keys(obj).length-1;
    let counter = 0;
    for(let key in obj) {
      switch(counter) {
        case 0: //start
          string = key + " = " + obj[key] + ", ";
          counter++;
          break;
        case length: //end
          string = string + key + " = " + obj[key];
          return string;
          break;
        default: // middle
          string = string + key + " = " + obj[key] + ", ";
          counter++;
      }
    }
    return string;
  }

/* Solution Notes
In hindsight, I could've improved my code by utilizing all the functions available to me. Instead I printed out text based on cases.

/**
 * Loop thru keys building a string with ' = ' between
 *  key and value and ', ' between each entry,
 *  then slice off the comma and space at the end
 *
function stringFromObject(obj) {
    let finalStr = '';
    for (let key in obj) {
      finalStr += key + ' = ' + obj[key] + ', ';
    }
    return finalStr.slice(0, -2);
  }
  
  /**
   * This is a very advanced approach that you might see in production code.
   *  Get entries of an object (an array of arrays with [key, value]), then
   *  turn it into an array of strings like ['key = value', 'key = value'],
   *  then finally join the array on comma + space
   *
  function stringFromObjectDeclarative(obj) {
    return Object.entries(obj)
      .map(pair => pair.join(' = '))
      .join(', ');
  }
  

*/
