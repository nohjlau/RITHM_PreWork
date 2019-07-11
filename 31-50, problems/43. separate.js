/*
043 - separate

Dogs don't get along with cats, and cats don't get along with dogs. 
What they both have in common is that they don't get along with water (baths). 
Given an array of 'dogs', 'cats', and 'water', write a function called separate, which returns a new array so that the dogs are separated from the cats by water. Make sure that cats always come first in the array.
You can assume that the array will always at least three elements, and that there'll always be at least one dog, one cat, and one water to work with. 

Examples:
separate(['dog','cat','water']) // ['cat','water','dog']
separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])
*/

separate = arr => {
    let new_arr = [];
    let cat_arr = [];
    let dog_arr = [];
    let water_arr = [];
    
    for(let i = 0; i < arr.length; i++) {
      switch (arr[i][0]) {
        case 'c':
          cat_arr.push("cat");
          break;
        case 'd':
          dog_arr.push("dog");
          break;
        case 'w':
          water_arr.push("water");
          break;
        default:
          break;
      }
    }
    
    new_arr = [...cat_arr, ...water_arr, ...dog_arr];
    return new_arr;
};