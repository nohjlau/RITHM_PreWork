/*
042 - highestScoringWord

Given a string of words, your goal is to find the highest scoring word
in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points,
and so on, all the way up until z, which is worth 26 points. You can assume
that strings will consist only of lowercase letters and spaces.
In the event that two words have the same score, return the word 
that appears first in the string.

Examples:
highestScoringWord("a b c d e f"); // "f"
highestScoringWord("hello world"); // "world"
highestScoringWord("go ahead make my day"); // "my"
highestScoringWord("there is no place like home"); // "there"
highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"
highestScoringWord("bbb cc f aaaaaa"); // "bbb"
highestScoringWord("this sentence has two highest scoring words"); // "sentence"

Credit - https://www.codewars.com/kata/highest-scoring-word
*/

let score_table = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j':10,
  'k':11,
  'l':12,
  'm':13,
  'n':14,
  'o':15,
  'p':16,
  'q':17,
  'r':18,
  's':19,
  't':20,
  'u':21,
  'v':22,
  'w':23,
  'x':24,
  'y':25,
  'z':26
}

highestScoringWord = string => {
  let split = string.split(" ");
  let scoreModifier = 1;
  let score_highest = 0;
  let score_index = 0;
  
  for(let x = 0; x < split.length; x++) {
    let score_current = 0;
    
    for(let i = 0; i < split[x].length; i++) {
      score_current += score_table[split[x][i]];
    }
    
    if (score_current > score_highest) {
      score_highest = score_current;
      score_index = x;
    }
    
  }
  return split[score_index];
  
};

/* Solution Notes
Instead of using a hashmap, you could have used the " score += word[i].charCodeAt(0) - 96;" to find the alphabet and make your code cleaner.
*/