function containsDuplicate(nums) {
  const counter = {};

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      return true;
    } else {
      counter[nums[i]] = 1;
    }
  }

  return false;
}

module.exports = containsDuplicate;
