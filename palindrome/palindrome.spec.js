const test = require("ava");
const isPalindrome = require('./palindrome');

test('isPalindrome', t => {
    t.is(isPalindrome("A man, a plan, a canal: Panama"), true);
    t.is(isPalindrome("race a car"), false);
});