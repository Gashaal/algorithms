function chunkArr(arr, size) {
  const num = arr.length % size;
  const res = [];

  if (num === 0) {
      for (let i = 0; i < arr.length; i +=size ) {
          res.push(arr.slice(i, i + size));
      }
  } else if (num) {
      res.push(arr.slice(0, size));
      res.push(arr.slice(size));
  } else {
      res.push(arr);
  }

  return res;
}
  
module.exports = chunkArr;