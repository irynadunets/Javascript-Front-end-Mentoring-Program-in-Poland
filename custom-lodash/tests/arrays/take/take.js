function take(array, n = 1) {
  let ind = 0;
  let index = 0;
  const length = array == null ? 0 : array.length;
  const chunk = [];

  while (ind < length) {
    const value = array[ind];
    if (ind < n) {
      chunk[index] = value;
      index += 1;
    }
    ind += 1;
  }

  return n === 0 ? [] : chunk;
}

module.exports = take;
