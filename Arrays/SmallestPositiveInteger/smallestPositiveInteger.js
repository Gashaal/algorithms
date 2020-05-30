function smallestPositiveInteger(A) {
  const set = new Set(A);
  let founded = false;
  let smallest = 1;

  while (!founded) {
    if (set.has(smallest)) {
      smallest++;
    } else {
      founded = true;
    }
  }

  return smallest;
}

module.exports = smallestPositiveInteger;
