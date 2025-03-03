export function bubbleSort(arr: number[]): number[] {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const isLast = i === arr.length - 1;

      if (!isLast && arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = current;
        isSorted = false;
      }
    }
  }

  return arr;
}
