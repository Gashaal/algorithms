function countCharacters(words, chars) {
  let res = 0;
  
  function charsCount(str) {
    const charsMap = {};

    for (let char of str) {
      if (charsMap[char]) {
        charsMap[char] += 1;
      } else {
        charsMap[char] = 1;
      }
    }

    return charsMap;
  }

  const charsMap = charsCount(chars);

  for (let word of words) {
    let charCounter = word.length;
    const temp = {...charsMap};

    for (let s of word) {
      if (temp[s]) {
        temp[s]--;
        charCounter--;
      }
    }

    if (charCounter === 0) {
      res += word.length;
    }
  }

  return res;
}

module.exports = countCharacters;
