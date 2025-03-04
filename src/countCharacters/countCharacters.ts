function countCharacters(words: string[], chars: string): number {
  let res = 0;
  
  function charsCount(str: string): Record<string, number> {
    const charsMap: Record<string, number> = {};

    for (const char of str) {
      if (charsMap[char]) {
        charsMap[char] += 1;
      } else {
        charsMap[char] = 1;
      }
    }

    return charsMap;
  }

  const charsMap = charsCount(chars);

  for (const word of words) {
    let charCounter = word.length;
    const temp = {...charsMap};

    for (const s of word) {
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

export default countCharacters;
