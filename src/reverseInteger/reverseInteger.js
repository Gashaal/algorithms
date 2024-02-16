// https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let s = Array.from(x.toString());

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];

    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  const reversed = parseInt(s.join('')) * Math.sign(x);
  return reversed >= Math.pow(-2, 31) && reversed < Math.pow(2, 31) ? reversed : 0;
};
