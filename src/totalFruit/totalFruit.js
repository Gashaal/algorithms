function totalFruit(fruits) {
  let max = 0;
  let tempMax = 0;
  const set = new Set();

  for (let i = 0; i < fruits.length; i++) {
    tempMax = 0;

    for (let j = i; j < fruits.length; j++) {
      const cur = fruits[j];

      if (!set.has(cur) && set.size > 1) {
        break;
      }

      set.add(cur);
      tempMax += 1;
    }

    set.clear();
    max = Math.max(max, tempMax);
  }

  return max;
}

module.exports = totalFruit;