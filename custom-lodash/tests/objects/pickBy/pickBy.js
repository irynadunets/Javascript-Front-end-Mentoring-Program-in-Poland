function pickBy(object, func) {
  const newObject = {};
  for (const [key, value] of Object.entries(object)) {
    if (func(value)) {
      newObject[key] = value;
    }
  }
  return newObject;
}

module.exports = pickBy;
