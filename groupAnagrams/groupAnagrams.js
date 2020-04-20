function groupAnagrams(strs) {
  const map = new Map();
  const result = [];

  function hash(str) {
    const counter = {};

    for (const char of str) {
      if (char in counter) {
        counter[char]++;
      } else {
        counter[char] = 1;
      }
    }

    return Object.keys(counter)
      .sort()
      .reduce((acc, curr) => acc + curr + counter[curr], "");
  }

  for (let i = 0; i < strs.length; i++) {
    const key = hash(strs[i]);

    if (map.has(key)) {
      map.set(key, [...map.get(key), strs[i]]);
    } else {
      map.set(key, [strs[i]]);
    }
  }

  for (const item of map.values()) {
    result.push(item);
  }

  return result;
}

module.exports = groupAnagrams;
