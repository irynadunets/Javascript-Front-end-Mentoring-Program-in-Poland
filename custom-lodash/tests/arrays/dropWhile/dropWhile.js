const shift = (array) => {
  let ind = 0;
  const length = array == null ? 0 : array.length;
  const newArray = [];
  while (ind < length - 1) {
    newArray[ind] = array[ind + 1];
    ind += 1;
  }
  return newArray;
};

const indexOf = (array, el) => {
  let ind = 0;
  const length = array == null ? 0 : array.length;
  while (ind < length) {
    if (el === array[ind]) break;
    ind += 1;
  }
  return ind;
};

const dropWhileFunction = (arr, fn) => {
  let nArr = arr;
  for (const e in arr) {
    if (fn(e, indexOf(arr, e), arr)) {
      nArr = shift(nArr);
    }
    nArr = shift(nArr);
    return nArr;
  }
};

function dropWhile(array, func) {
  let ind = 0;
  let indeks = 0;
  const length = array == null ? 0 : array.length;
  const arr = [];

  if (Array.isArray(func)) {
    while (ind < length) {
      const value = JSON.stringify(array[ind]);
      if (value.includes(func[0]) && !value.includes(func[1])) {
        arr[indeks] = array[ind];
        indeks += 1;
      }
      ind += 1;
    }
    return arr;
  } if (typeof func === 'function') {
    return dropWhileFunction(array, func);
  } if (typeof func === 'object') {
    while (ind < length) {
      const value = JSON.stringify(array[ind]);
      const predicat = JSON.stringify(func);
      if (value !== predicat) {
        arr[indeks] = array[ind];
        indeks += 1;
      }
      ind += 1;
    }
    return arr;
  } if (typeof func === 'string') {
    while (ind < length) {
      const value = array[ind];
      if (JSON.stringify(value) !== func) {
        arr[indeks] = array[ind];
        indeks += 1;
      }
      ind += 1;
    }
    return arr;
  }
}

module.exports = dropWhile;
