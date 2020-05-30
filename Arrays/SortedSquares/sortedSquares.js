function sortedSquares(A) {
  const res = [];
  let negativePointer = 0;
  let positivePointer = A.length - 1;

  for (let i = 0; negativePointer < A.length; negativePointer++) {
    if (A[negativePointer] > 0) {
      positivePointer = negativePointer;
      break;
    }
  }

  negativePointer = positivePointer - 1;
  while (negativePointer >= 0 && positivePointer < A.length) {
    const ii = A[negativePointer] * A[negativePointer];
    const jj = A[positivePointer] * A[positivePointer];

    if (ii < jj) {
      res.push(ii);
      negativePointer--;
    } else {
      res.push(jj);
      positivePointer++;
    }
  }

  while (negativePointer >= 0) {
    res.push(A[negativePointer] * A[negativePointer]);
    negativePointer--;
  }

  while (positivePointer < A.length) {
    res.push(A[positivePointer] * A[positivePointer]);
    positivePointer++;
  }

  return res;
}

module.exports = sortedSquares;
