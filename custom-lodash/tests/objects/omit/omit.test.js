const omit = require('./omit');

describe("omit function", () => {

var object = { 'a': 1, 'b': '2', 'c': 3 };

test('Should be type Object and NOT to be string, number, function type', () => {
  expect(typeof omit(object, ['a', 'c']) === "object").toBe(true);
  expect(omit(object, ['a', 'c'])).not.toBeInstanceOf(Array);
  expect(omit(object, ['a', 'c'])).not.toBeInstanceOf(Function);
  expect(omit(object, ['a', 'c'])).not.toBeInstanceOf(Number);
});

test('Should NOT contain undefined, function type as groups', () => {
  expect(omit(object, ['a', 'c'])).not.toContain(Function);
  expect(omit(object, ['a', 'c'])).not.toContain(undefined);
  expect(omit(object, ['a', 'c'])).not.toContain(Number);
});

test('Creates an object composed of the own and inherited enumerable property paths of object that are not omitted', () => {
  expect(omit(object, ['a', 'c'])).toStrictEqual({ 'b': '2' });
});

});
