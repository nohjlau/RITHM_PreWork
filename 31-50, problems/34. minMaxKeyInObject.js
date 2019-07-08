/*
034 - minMaxKeyInObject

Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
The function should return an array with the following format: [lowestKey, highestKey]

Examples:
minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]

minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

* Remember all object keys are strings, even if they hold numeric values.
*/

function minMaxKeyInObject(obj) {
    let highest = 0;
    let lowest = 0;
    let defaultSet = 0;
    
    for(key in obj) {
      if(!isNaN(key) && defaultSet === 0) {
        highest = Number(key);
        lowest = Number(key);
        defaultSet = 1;
      }
      if(Number(key) > Number(highest)){
        highest = Number(key);
      }
      if(Number(key) < Number(lowest))
        lowest = Number(key);
        
    }
    return [lowest, highest];
  }

/* Solution Notes

+var is shorthand for Number(var);

 * Advanced approach. Declarative 1-liner using Object.keys 
 *  and Array spread operator (...)
function minMaxKeyInObjectDeclarative(obj) {
    return [Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj))];
  }
*/
