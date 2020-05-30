function minDeletion(S) {
  let deletion = 0;
  const counter = Counter(S);
  const set = new Set();

  function Counter(str) {
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

  for (const s in counter) {
    let number = counter[s];

    while (number) {
      if (!set.has(number)) {
        set.add(number);
        break;
      }

      deletion++;
      number--;
    }
  }

  return deletion;
}

module.exports = minDeletion;
