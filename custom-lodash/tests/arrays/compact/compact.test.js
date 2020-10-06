const compact = require('./compact');

describe("compact function", () => {

beforeEach(() => {
  array = [0, 1, false, 2, '', true, null]
})

test('Should be type Array and NOT to be string, number, function type', () => {
  expect(Array.isArray(compact(array))).toBe(true);
  expect(compact(array)).not.toBeInstanceOf(String);
  expect(compact(array)).not.toBeInstanceOf(Function);
  expect(compact(array)).not.toBeInstanceOf(Number);
});

test('should NOT contain falsy value', () => {
  expect(compact(array)).not.toContain(false);
  expect(compact(array)).not.toContain(0);
  expect(compact(array)).not.toContain('');
  expect(compact(array)).not.toContain(null);
});

test('Creates an array with all falsey values removed', () => {
  expect(compact(array)).toStrictEqual([1, 2, true]);
});

});
