function includes(array, func, index = 0) {
  const indexOf = (arr, el) => {
    let ind = 0;
    const length = arr == null ? 0 : arr.length;
    while (ind < length) {
      if (el === arr[ind]) break;
      ind += 1;
    }
    return ind;
  };

  if (typeof array === 'object') {
    if (Array.isArray(array)) {
      if (indexOf(array, func) === index) {
        return true;
      }
      return false;
    }
    const predicat = JSON.stringify(func);
    const value = JSON.stringify(array);
    if (value.includes(predicat.substring(1, predicat.length - 1))) {
      return true;
    }
  } else if (typeof array === 'string' && typeof func === 'string') {
    if (array.includes(func)) {
      return true;
    }
    return false;
  }
  return false;
}

module.exports = includes;
