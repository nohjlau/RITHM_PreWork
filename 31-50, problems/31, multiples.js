/*
031 - multiples

Implement a function called multiples that accepts two numbers: x and n. 
The function should return the first n multiples of the number x. 
Assume that x is a positive integer.
Credit - https://www.codewars.com/kata/return-the-first-m-multiples-of-n/train/javascript

Examples:
multiples(3, 4) // [3, 6, 9, 12]
multiples(2, 5) // [2, 4, 6, 8, 10]
*/

function multiples(x, n) {
  var set = [];
  for (i =1; i <= n; i++) {
    set.push(x*i);
  }
  return set;
}

