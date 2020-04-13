const test = require("ava");
const isAnagram = require('./anagram');

test('isAnagram', t => {
    t.is(isAnagram("anagram", "nagaram"), true);
    t.is(isAnagram("rat", "car"), false);
});