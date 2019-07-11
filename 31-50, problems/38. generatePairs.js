/*
038 - generatePairs

Write a function generatePairs that accepts an integer and generates an array 
containing the pairs of integers [a, b]. The pairs should be sorted by increasing 
values of a then increasing values of b.

Examples:
generatePairs(3) // [ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]
generatePairs(2) // [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
generatePairs(1) // [ [0, 0], [0, 1], [1,1]]
generatePairs(0) // [ [0, 0]]

Credit -  https://www.codewars.com/kata/pairs-of-integers-from-0-to-n/train/javascript
*/

generatePairs = (input) => {
    let arr = [];
    for (a = 0; a <= input; a++) {
      for ( b = a; b <= input; b++) {
        arr.push([a,b]);
      }
    }
    return arr;
}