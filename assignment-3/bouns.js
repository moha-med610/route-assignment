/**
 * @fileoverview Solve the problem Majority Element on LeetCode.
 */

const majorityElement = (num) => {
  num.sort((a, b) => a - b);
  return num[Math.floor(num.length / 2)];
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
