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
  let newArr = arr;
  for (const e in arr) {
    if (fn(e, indexOf(arr, e), arr)) {
      newArr = shift(newArr);
    }
    return newArr;
  }
};

const find = (array, func) => {
  const length = array == null ? 0 : array.length;

  if (typeof func === 'function') {
    return dropWhileFunction(array, func)[0];
  } if (typeof func === 'object') {
    const arr = [];
    let ind = 0;
    let indeks = 0;
    const predicat = JSON.stringify(func);
    while (ind < length) {
      const value = JSON.stringify(array[ind]);
      if (value.includes(predicat.substring(1, predicat.length - 1))) {
        arr[indeks] = array[ind];
        indeks += 1;
      }
      if (Array.isArray(func)) {
        if (value.includes(func[0]) && value.includes(func[1])) {
          arr[indeks] = array[ind];
          indeks += 1;
          break;
        }
      }
      ind += 1;
    }
    return arr;
  } if (typeof func === 'string') {
    const arr = [];
    let ind = 0;
    let indeks = 0;
    while (ind < length) {
      const value = JSON.stringify(array[ind]);
      if (value.includes(func) && value.includes(true)) {
        arr[indeks] = array[ind];
        indeks += 1;
      }
      ind += 1;
    }
    return arr[0];
  }
  return false;
};

module.exports = find;
