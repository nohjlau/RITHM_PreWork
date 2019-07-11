/*
046 - removeDuplicatesFromSorted

Given a sorted array of numbers, return the length of the subarray formed by 
allowing each number to appear at most two times.

Examples:
removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3]); // 5
removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]); // 8
removeDuplicatesFromSorted([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]); // 2
removeDuplicatesFromSorted([1, 2, 3, 4, 5, 6]); // 6
removeDuplicatesFromSorted([]); // 0
*/

removeDuplicatesFromSorted = arr => {
    let count = 0;
    let arr_map = {};
    for (let i = 0; i < arr.length; i++) {
      if(isNaN(arr_map[arr[i]]))
        arr_map[arr[i]] = 0;
        
      arr_map[arr[i]] += 1;
    }
    
    for (let key in arr_map) {
      if (arr_map[key] <= 2) {
        count += arr_map[key];
      } else if (arr_map[key] > 2) {
        count += 2;
      }
    }
    return count;
};

/* Solution Notes
The model solution is a much more elegant solution than what I've done as it utilizes less memory
space as the sorted array is iterated through and determined if the count is more than 2 for any given number.

function removeDuplicatesFromSorted(sortedArr) {
  var len = 0;
  var cur = null;
  var count = 0;
  for (var i = 0; i < sortedArr.length; i++) {
    if (cur !== sortedArr[i]) {
      cur = sortedArr[i]
      len++;
      count = 1;
    } else {
      count++;
      if (count < 3) len++;
    }
  }
  return len;
}

*/