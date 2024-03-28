//leetcode.com/problems/jewels-and-stones/description/

// O(n + k)?

function numJewelsInStones(J, S) {
  const setJ = new Set(J);
  let count = 0;

  for (let char of S) {
    if (setJ.has(char)) {
      count++;
    }
  }

  return count;
}

module.exports = numJewelsInStones;
