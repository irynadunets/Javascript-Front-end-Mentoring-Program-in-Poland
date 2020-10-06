function drop(array, n = 1) {
  let ind = 0;
  const length = array == null ? 0 : array.length;
  const chunk = [];
  let index = -1;

  while (ind < length) {
    const value = array[ind];
    if (ind > n - 1) {
      chunk[index += 1] = value;
    }
    ind += 1;
  }

  return n === 0 ? array : chunk;
}

module.exports = drop;
