function pick(object, array) {
  let ind = 0;
  const length = array == null ? 0 : array.length;
  const newObject = {};
  while (ind < length) {
    const key = array[ind];
    for (const prop in object) {
      if (prop === key) {
        const value = object[key];
        newObject[prop] = value;
      }
    }
    ind += 1;
  }

  return newObject;
}

module.exports = pick;
