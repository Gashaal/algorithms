const test = require('ava');
const numJewelsInStones = require('./numJewelsInStones');

test('numJewelsInStones', (t) => {
  t.is(numJewelsInStones('ab', 'aabbccd'), 4);
  t.is(numJewelsInStones('z', 'ZZ'), 0);
});
