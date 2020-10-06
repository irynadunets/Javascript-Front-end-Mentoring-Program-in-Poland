const toPairs = (object) => {
  let index = 0,
      array =[];
    for (let [key, value] of Object.entries(object)) {
      array[index++] = [key,value];
  }
  return array;
}

module.exports = toPairs;
