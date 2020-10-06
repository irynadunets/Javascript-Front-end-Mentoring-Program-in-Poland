const chunk = require('./chunk');

describe("chunk function", () => {

beforeEach(() => {
  array = ['a', 'b', 'c', 'd']
})

test('Should be type Array and NOT to be string, number, function type', () => {
  expect(Array.isArray(chunk(array, 2))).toBe(true);
  expect(chunk(array, 2)).not.toBeInstanceOf(String);
  expect(chunk(array, 2)).not.toBeInstanceOf(Function);
  expect(chunk(array, 2)).not.toBeInstanceOf(Number);
});

test('Should NOT contain oject, string, undefined, function type as groups', () => {
  expect(chunk(array, 2)).not.toContain(Function);
  expect(chunk(array, 2)).not.toContain(Object);
  expect(chunk(array, 2)).not.toContain(String);
  expect(chunk(array, 2)).not.toContain(undefined);
});

test('Creates an array of elements split into groups the length of size of one n', () => {
  expect(chunk(array, false)).toStrictEqual([[], ["a", "b", "c", "d"]]);
  expect(chunk(array, 0)).toStrictEqual([[], ["a", "b", "c", "d"]]);
  expect(chunk(array, 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
  expect(chunk(array, 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
});

});
