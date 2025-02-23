function charCounter(str) {
  const counter = {};

  for (const char of str) {
    if (char in counter) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }

  return counter;
}

function isAnagram(s, t) {
  const sCounter = charCounter(s);
  const tCounter = charCounter(t);

  if (Object.keys(sCounter).length !== Object.keys(tCounter).length) {
    return false;
  }

  for (const char in sCounter) {
    if (sCounter[char] !== tCounter[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
