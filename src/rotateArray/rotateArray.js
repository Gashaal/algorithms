function rotateArray(nums, k) {
  while (k) {
    nums.unshift(nums.pop());
    k--;
  }

  return nums;
}

module.exports = rotateArray;
