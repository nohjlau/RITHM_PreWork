/*
024 - entries

Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
Do not use the built in Object.entries() function!

Examples:
var obj = { a: 1, b: 2, c: 3 };
entries(obj); 
// [["a",1], ["b",2], ["c",3]]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2); 
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

var obj3 = {};
entries(obj3); // []
*/

function entries(obj) {
    let arr = [];
    for(let key in obj) {
        arr.push([key, obj[key]]);
        
    console.log(key);
    }
    return arr;
}