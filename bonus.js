/**
 * Solve the problem @RemoveElement on LeetCode
 */
var removeElement = function (nums, val) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
};
