const drop = require('./drop');

describe("drop function", () => {

beforeEach(() => {
  array = [1, 2, 3]
})

test('Should be type Array and NOT to be string, function type', () => {
  expect(Array.isArray(drop(array, 2))).toBe(true);
  expect(drop(array, 2)).not.toBeInstanceOf(String);
  expect(drop(array, 2)).not.toBeInstanceOf(Function);
  expect(drop(array, 2)).not.toBeInstanceOf(Number);
});

test('Creates a slice of array with n elements dropped from the beginning', () => {
  expect(drop(array)).toStrictEqual([2, 3]);
  expect(drop(array, 0)).toStrictEqual([1, 2, 3]);
  expect(drop(array, 2)).toStrictEqual([3]);
  expect(drop(array, 5)).toStrictEqual([]);
});

test('should NOT contain n elements dropped from the beginning', () => {
  expect(drop(array)).not.toContain(1);
  expect(drop(array, 2)).not.toContain(1,2);
  expect(drop(array, 5)).not.toContain(1,2,3);
});

});
