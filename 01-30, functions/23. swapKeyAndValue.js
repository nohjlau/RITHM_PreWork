/*
023 - swapKeyAndValue

Write a function called swapKeyAndValue, which accepts an object and a key. 
The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

Examples:
var instructor = { name: 'Elie', job: 'Instructor' };

swapKeyAndValue(instructor, 'name');
// {Elie: 'name', job: "Instructor"}

swapKeyAndValue(instructor, 'job');
// {name: "Elie", Instructor: 'job'}
*/

function swapKeyAndValue(obj, key) {
    let new_obj = {};
    for(var iter in obj ){
        if (iter == key) {
        new_obj[obj[iter]] = iter;
        } else {
        new_obj[iter] = obj[iter];
        }
    }
    return new_obj;
}