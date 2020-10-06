const zip = require('./zip');

describe("zip function", () => {

test('Creates an array of grouped elements', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
});


test('Should be type Array and NOT to be string, number, function type', () => {
  expect(Array.isArray(zip(['a', 'b'], [1, 2], [true, false]))).toBe(true);
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toBeInstanceOf(String);
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toBeInstanceOf(Function);
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toBeInstanceOf(Number);
});

test('Should NOT contain oject, string, undefined, function type as groups', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toContain(Function);
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toContain(Object);
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toContain(String);
  expect(zip(['a', 'b'], [1, 2], [true, false])).not.toContain(undefined);
});

});
