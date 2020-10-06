const pick = require('./pick');

describe("pick function", () => {

var object = { 'a': 1, 'b': '2', 'c': 3 };

test('Should be type Object and NOT to be array, number, function type', () => {
  expect(typeof pick(object, ['a', 'c']) === "object").toBe(true);
  expect(pick(object, ['a', 'c'])).not.toBeInstanceOf(Array);
  expect(pick(object, ['a', 'c'])).not.toBeInstanceOf(Function);
  expect(pick(object, ['a', 'c'])).not.toBeInstanceOf(Number);
});

test('Should NOT contain undefined, function, number type as groups', () => {
  expect(pick(object, ['a', 'c'])).not.toContain(Function);
  expect(pick(object, ['a', 'c'])).not.toContain(undefined);
  expect(pick(object, ['a', 'c'])).not.toContain(Number);
});

test('Creates an object composed of the picked object properties', () => {
  expect(pick(object, ['a', 'c'])).toStrictEqual({ 'a': 1, 'c': 3 });
});

});
