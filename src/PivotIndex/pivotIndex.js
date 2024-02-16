function pivotIndex(nums) {
  let pivot = -1;

  if (Array.isArray(nums)) {
    let sum = 0;
    let sumLeft = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
      if (sumLeft === sum - sumLeft - nums[i]) {
        pivot = i;
        break;
      }

      sumLeft += nums[i];
    }
  }

  return pivot;
}

module.exports = pivotIndex;
