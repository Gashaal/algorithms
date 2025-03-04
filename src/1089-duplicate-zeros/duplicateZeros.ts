function duplicateZeros(arr: number[]): void {
  const originalLength = arr.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      if (arr.length === originalLength) {
        arr.splice(-1, 1);
      }
      arr.splice(i, 0, 0);
    }
  }
}

export default duplicateZeros;
