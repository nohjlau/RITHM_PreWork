/*
022 - values

Write a function called values, which accepts an object and returns an array of all of the values in the object.
Do not use the built in Object.values() function!

Examples:
var obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]

var obj3 = {};
values(obj3); // []
*/

function values(obj) {
    let arr = [];
    for(var key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }