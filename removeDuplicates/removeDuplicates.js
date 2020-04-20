// TODO: implement in-place solution - https://en.wikipedia.org/wiki/In-place_algorithm

function removeDuplicates(nums) {
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}

module.exports = removeDuplicates;
