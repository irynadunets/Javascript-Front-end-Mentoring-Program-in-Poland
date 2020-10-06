function omit(object, array) {
  const newObject = {};
  const objectString = JSON.stringify(array);
  for (const [key, value] of Object.entries(object)) {
    if (!objectString.includes(key)) {
      newObject[key] = value;
    }
  }
  return newObject;
}

module.exports = omit;
