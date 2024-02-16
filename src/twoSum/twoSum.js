function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
}

function binarySearch(nums, n) {
  if (nums.length === 1 && nums[0] !== n) {
    return -1;
  }

  const middle = Math.floor(nums.length - 1 / 2);

  if (nums[middle] === n) {
    return middle;
  } else if (nums[middle] > n) {
    return binarySearch(nums.slice(0, middle), n);
  } else if (nums[middle] < n) {
    return binarySearch(nums.slice(middle + 1), n);
  }
}

module.exports = binarySearch;
// module.exports = twoSum;
