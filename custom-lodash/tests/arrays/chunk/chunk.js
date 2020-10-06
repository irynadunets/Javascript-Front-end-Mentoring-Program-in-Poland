function chunk(array, n) {
  let ind = 0;
  const length = array == null ? 0 : array.length;
  const oneChunk = [];
  const twoChunk = [];  
  let index1 = -1;
  let index2 = -1;

  while (ind < length) {
    const value = array[ind];
    if (ind < n) {
      oneChunk[index1 += 1] = value;
    } else if (ind > n - 1) {
      twoChunk[index2 += 1] = value;
    }
    ind += 1;
  }

  return [oneChunk,twoChunk];
}

module.exports = chunk;
