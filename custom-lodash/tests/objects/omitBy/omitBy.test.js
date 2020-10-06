const omitBy = require('./omitBy');

describe("omitBy function", () => {

var object = { 'a': 1, 'b': '2', 'c': 3 };

test('Should be type Object and NOT to be array, number, function type', () => {
  expect(typeof omitBy(object, Number.isInteger) === "object").toBe(true);
  expect(omitBy(object, Number.isInteger)).not.toBeInstanceOf(Array);
  expect(omitBy(object, Number.isInteger)).not.toBeInstanceOf(Function);
  expect(omitBy(object, Number.isInteger)).not.toBeInstanceOf(Number);
});

test('Should NOT contain undefined, function, number, array type as groups elements', () => {
  expect(omitBy(object, Number.isInteger)).not.toContain(Function);
  expect(omitBy(object, Number.isInteger)).not.toContain(undefined);
  expect(omitBy(object, Number.isInteger)).not.toContain(Number);
  expect(omitBy(object, Number.isInteger)).not.toContain(Array);
});

test('Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesnt return truthy for', () => {
  expect(omitBy(object, Number.isInteger)).toStrictEqual({ 'b': '2' });
});

});
