/*
050 - objectCompare

Write a function called objectCompare which accepts two objects or two arrays. 
The function should return true if the two objects are identical or if the two 
arrays contain the same values at the same indices. 

If you are comparing two objects, the of the keys in each object does not matter. 
If you are comparing two arrays the order does matter.

Do not use JSON.stringify to solve this quickly - it will not work!

Examples:
var arr1 = [1,2,3,4]
var arr2 = [1,2,3,4]

objectCompare(arr1, arr2) // true

var arr3 = [1,2,3,4]
var arr4 = [4,3,2,1]
*/

var obj1 = {favNum: 22, favColor: "green"}

function objectCompare(obj, obj2) {
  if(Array.isArray(obj) && Array.isArray(obj2) && obj.length === obj2.length) { // arrays
    for(let a = 0; a < obj.length; a++) {
        if(obj[a] !== obj2[a])
          return false;
    }
    return true;
  }
  
  for(let key in obj) {
    if(obj[key] != obj2[key]) {
      if(Array.isArray(obj[key]) && Array.isArray(obj2[key]) && obj[key].length === obj2[key].length) {
        for(let i = 0; i < obj[key].length; i++) {
          if(obj[i] !== obj2[i]) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  }
  return true;
}

/* Solution Notes
The model solution takes advantage of the every function that makes it unnecessary to manually for-loop through to compare the elements.
"arr1.every((val,idx) => val === arr2[idx])"

every(currentValue, index, arr)
currentValue = Required. The value of the current element.
index = Optional. The array index of the current elmenet.
arr = Optional. The array object the current element belongs to.
*/
