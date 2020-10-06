function merge(object, other) {
  let ind = 0;
  let indeks = 0;
  const chunk = [];
  const newObject = {};
  for (const [key1, value1] of Object.entries(object)) {
    for (const [key2, value2] of Object.entries(other)) {
      if (key1 === key2) {
        while (ind < value1.length) {
          const str1 = JSON.stringify(value1[ind]);
          const str2 = JSON.stringify(value2[ind]);
          const str = str1.substring(0, str1.length - 1).concat(',', str2.substring(1, str2.length));
          chunk[indeks] = JSON.parse(str);
          indeks += 1;
          ind += 1;
        }
      }
      newObject[key1] = chunk;
    }
  }
  return newObject;
}

module.exports = merge;
