function chunkArr<T>(arr: T[], size: number): T[][] {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

export default chunkArr;
