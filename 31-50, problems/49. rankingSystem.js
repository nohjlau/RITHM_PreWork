/*
049 - ranking-system

Given an array of unique numbers, return a new array of rankings of 
the original array. For example, if your input array is [10, 5, 20], 
the output should be [2, 3, 1], since 10 is the second largest number,
5 is the third largest, and 20 is the largest.

Examples:
rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
rankings([100]); // [1]
rankings([4, 2, 3, 1]); // [1, 3, 2, 4]

Credit - https://www.codewars.com/kata/ranking-system - this Kata was written by a former Rithm student!
*/

function rankings(arr) {
    let score_table = [];
    let greatest = arr[0];
    let counter = 1;
    let index = 0;
    for(let x = 0; x < arr.length; x++) {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= greatest) {
          greatest = arr[i];
          index = i;
        }
      }
      arr[index] = Number.MIN_SAFE_INTEGER;
      score_table[index] = counter;
      counter++;
      index = 0;
      greatest = Number.MIN_SAFE_INTEGER;
    }
    console.log(score_table);
    return score_table;
  }