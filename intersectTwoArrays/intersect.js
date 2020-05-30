// O(n + k)?

function intersect(nums1, nums2) {
  const intersection = [];

  function Counter(nums) {
    const counter = {};

    for (let i = 0; i < nums.length; i++) {
      if (counter[nums[i]]) {
        counter[nums[i]]++;
      } else {
        counter[nums[i]] = 1;
      }
    }

    return counter;
  }

  const nums2Counter = Counter(nums2);

  for (let i = 0; i < nums1.length; i++) {
    if (nums2Counter[nums1[i]]) {
      nums2Counter[nums1[i]]--;
      intersection.push(nums1[i]);
    }
  }

  return intersection;
}

module.exports = intersect;
