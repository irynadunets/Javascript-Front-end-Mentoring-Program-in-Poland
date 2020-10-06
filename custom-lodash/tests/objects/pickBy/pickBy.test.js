const pickBy = require('./pickBy');

describe("pick function", () => {

var object = { 'a': 1, 'b': '2', 'c': 3 };

test('Should be type Object and NOT to be array, number, function type', () => {
  expect(typeof pickBy(object, Number.isInteger) === "object").toBe(true);
  expect(pickBy(object, Number.isInteger)).not.toBeInstanceOf(Array);
  expect(pickBy(object, Number.isInteger)).not.toBeInstanceOf(Function);
  expect(pickBy(object, Number.isInteger)).not.toBeInstanceOf(Number);
});

test('Should NOT contain undefined, function, number type as groups', () => {
  expect(pickBy(object, Number.isInteger)).not.toContain(Function);
  expect(pickBy(object, Number.isInteger)).not.toContain(undefined);
  expect(pickBy(object, Number.isInteger)).not.toContain(Number);
});

test('Creates an object composed of the object properties predicate returns truthy for', () => {
  expect(pickBy(object, Number.isInteger)).toStrictEqual({ 'a': 1, 'c': 3 });
});

});
