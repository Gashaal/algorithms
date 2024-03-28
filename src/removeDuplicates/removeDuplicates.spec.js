const test = require('ava');
const removeDuplicates = require('./removeDuplicates');

test('removeDuplicates', (t) => {
  let nums = [1, 1, 2];
  removeDuplicates(nums);

  t.deepEqual(nums, [1, 2]);
});
