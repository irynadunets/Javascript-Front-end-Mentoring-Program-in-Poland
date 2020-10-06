function zip(...arrays) {
  let indY = 0;
  let index1 = 0;
  const chunk = [];
  const length = arrays == null ? 0 : arrays.length;
  const lengthElement = arrays[0] == null ? 0 : arrays[0].length;

  while (indY < lengthElement) {
    chunk[index1] = new Array(length);
    let indX = 0;
    let index2 = 0;
    while (indX < length) {
      const value = arrays[indX];
      chunk[index1][index2] = value[indY];
      index2 += 1;
      indX += 1;
    }
    index1 += 1;
    indY += 1;
  }
  return chunk;
}

module.exports = zip;
