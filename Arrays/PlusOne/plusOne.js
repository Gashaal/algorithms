/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  if (digits.length > 0) {
    let carry = false;
    const resDigits = digits.reverse().map((digit, i) => {
      let newDigit = digit;

      if (i === 0 || carry) {
        newDigit += 1;

        if (newDigit === 10) {
          carry = true;
          newDigit = 0;
        } else {
          carry = false;
        }
      }

      return newDigit;
    });

    if (carry) {
      resDigits.push(1);
    }

    console.log(resDigits);

    return resDigits.reverse();
  } else {
    return [1];
  }
}

module.exports = plusOne;
