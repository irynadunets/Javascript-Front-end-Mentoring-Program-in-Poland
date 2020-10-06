function compact(array) {
  let InitialInd = -1;
  const length = array == null ? 0 : array.length;
  let FinishInd = -1;
  const result = [];

  while (InitialInd < length) {
    const value = array[InitialInd];
    if (value) {
      result[FinishInd += 1] = value;
    }
    InitialInd += 1;
  }

  return result;
}

module.exports = compact;
