/**
 * @fileoverview Solve leet code 'Kth Missing Positive Number'
 */

const findKthPositive = function (arr, k) {
  const setArr = new Set(arr);

  let missingNum = 0;
  let currentNum = 1;

  for (missingNum = 0; missingNum < k; currentNum++) {
    if (!setArr.has(currentNum)) {
      missingNum++;
    }
  }
  return currentNum - 1;
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5));
