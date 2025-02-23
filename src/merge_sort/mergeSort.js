function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, pivotIndex);
  let rigth = arr.slice(pivotIndex);

  left = mergeSort(left);
  rigth = mergeSort(rigth);

  return merge(left, rigth)
}

function merge(left, rigth) {
  const merged = [];

  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      merged.push(left.shift());
    } else {
      merged.push(rigth.shift());
    }
  }

  if (left.length) {
    return merged.concat(left);
  } else if (rigth.length) {
    return merged.concat(rigth);
  }

  return merged;
}

module.exports = mergeSort;