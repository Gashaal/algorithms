function findNumbers(nums) {
  let even = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = Math.abs(nums[i]) / 10;
    let digits = 1;
    while (current > 1) {
      digits++;
      current = current / 10;
    }

    if (digits % 2 === 0) {
      even++;
    }
  }

  return even;
}

module.exports = findNumbers;
