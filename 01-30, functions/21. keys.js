/*
021 - keys

Write a function called keys, which accepts an object and returns an array of all of the keys in the object. 
Do not use the built in Object.keys() function!

Examples:
var obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

var obj2 = { first: 'Matt', last: 'Lane' };
keys(obj); // ["first", "last"]

var obj3 = {};
keys(obj); // []
*/

function keys(obj) {
  let arr = [];
  for (key in obj) {
    arr.push(key);
  }
  return arr;
}
