function map(array, func) {
  const mapFunction = (arr, fn) => {
    let ind = 0;
    const length = arr == null ? 0 : arr.length;
    const newArr = [];
    while (ind < length) {
      const value = arr[ind];
      newArr[ind] = fn(value);
      ind += 1;
    }
    return newArr;
  };

  if (typeof func === 'string') {
    let index = 0;
    let indeks = 0;
    const length = array == null ? 0 : array.length;
    const arr = [];
    while (index < length) {
      const value = JSON.stringify(array[index]);
      const item = array[index];
      if (value.includes(func)) {
        for (const key in item) {
          if (key === func) {
            arr[indeks] = item[key];
            indeks += 1;
          }
        }
      }
      index += 1;
    }
    return arr;
  }
  if (Array.isArray(array)) {
    return mapFunction(array, func);
  } if (typeof array === 'object') {
    const arr = Object.values(array);
    return mapFunction(arr, func);
  }
}

module.exports = map;
