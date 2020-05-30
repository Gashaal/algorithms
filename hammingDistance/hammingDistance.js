function hammingDistance(x, y) {
  let dist = 0;
  let x_y = x ^ y;

  while (x_y > 0) {
    if (x_y & 1) {
      dist++;
    }

    x_y = x_y >> 1;
  }

  return dist;
}

module.exports = hammingDistance;
