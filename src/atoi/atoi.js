// https://leetcode.com/problems/string-to-integer-atoi/description/

function atoi(str) {
  let [sign, f, l, invalid] = [1, -1, 0, false];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && f === -1) {
      continue;
    }

    if (str[i] === '' && f === -1) {
      continue;
    }

    if (str[i] === '-' && f === -1) {
      sign = -1;
      continue;
    }

    if (isNaN(parseInt(str[i])) && f === -1) {
      return 0;
    }

    if (!isNaN(parseInt(str[i])) && f === -1) {
      f = i;
    }

    if (!isNaN(parseInt(str[i])) && f !== -1) {
      l = i + 1;
    }

    if (isNaN(parseInt(str[i])) && f !== -1) {
      break;
    }
  }

  const reversed = parseInt(str.slice(f, l)) * sign;
  return reversed >= Math.pow(-2, 31) && reversed < Math.pow(2, 31) ? reversed : 0;
}

module.exports = atoi;
