const merge = require('./merge');

describe("merge function", () => {

  var object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };


test('Should be type Object and NOT to be array, number, function type', () => {
  expect(typeof merge(object, other) === "object").toBe(true);
  expect(merge(object, other)).not.toBeInstanceOf(Array);
  expect(merge(object, other)).not.toBeInstanceOf(Function);
  expect(merge(object, other)).not.toBeInstanceOf(Number);
});

test('Should NOT contain undefined, function type as groups', () => {
  expect(merge(object, other)).not.toContain(Function);
  expect(merge(object, other)).not.toContain(undefined);
});

test('Merges own and inherited enumerable string keyed properties of source objects into the destination object', () => {
  expect(merge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
});
});
