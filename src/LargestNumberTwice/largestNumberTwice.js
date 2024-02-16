// nums will have a length in the range [1, 50].
// Every nums[i] will be an integer in the range [0, 99]

function dominantIndex(nums) {
  let max = nums[0];
  let prevMax = 0;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    if (cur > max) {
      max = cur;
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex) {
      const cur = nums[i];

      if (cur > prevMax) {
        prevMax = cur;
      }
    }
  }

  if (max / prevMax >= 2 || (max === 1 && prevMax === 0) || nums.length === 1) {
    return maxIndex;
  } else {
    return -1;
  }
}

module.exports = dominantIndex;
