function containsDuplicate(nums: number[]): boolean {
  const counter: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      return true;
    } else {
      counter[nums[i]] = 1;
    }
  }

  return false;
}

export default containsDuplicate;
