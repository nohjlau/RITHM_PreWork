/*
032 - pluck

Instructions from your teacher:
Write a function called pluck, which takes an array of objects and the name of a key.
The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
//When testing, you can use JSON.stringify to convert object data into readable data.

Examples:
pluck([
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
 'name'
)
// ["Tim", "Matt", "Elie"]

pluck(
  [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
 'isBoatOwner'
)
// [true, false, undefined]
*/

function pluck(arr, key_value) {
    let arr2 = [];
    for (var key in arr) {
        if (!arr.hasOwnProperty(key_value)) {
        // console.log(key + " -> " + JSON.stringify(arr[key][key_value])); //Print out objects.
        arr2.push(arr[key][key_value]);
    }
  }
  return arr2;
}

/* Solution Notes:
I overcomplicated the solution by trying to breakdwon the and view each object, when I simply could have cycled through them w a forloop the array.

function pluck(arr, key) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
  }
  return newArr;
}
*/
