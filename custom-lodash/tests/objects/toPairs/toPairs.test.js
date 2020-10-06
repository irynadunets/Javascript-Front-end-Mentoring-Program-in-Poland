const toPairs = require('./toPairs');

describe("toPairs function", () => {

  function Foo() {
    this.a = 1;
    this.b = 2;
  }
  Foo.prototype.c = 3;

test('Creates an array of own enumerable string keyed-value pairs for object', () => {
  expect(toPairs(new Foo)).toStrictEqual([['a', 1], ['b', 2]]);
});

test('Should be type Array and NOT to be string, number, function type', () => {
  expect(Array.isArray(toPairs(new Foo))).toBe(true);
  expect(toPairs(new Foo)).not.toBeInstanceOf(String);
  expect(toPairs(new Foo)).not.toBeInstanceOf(Function);
  expect(toPairs(new Foo)).not.toBeInstanceOf(Number);
});

test('Should NOT contain oject, string, undefined, function type as pairs', () => {
  expect(toPairs(new Foo)).not.toContain(Function);
  expect(toPairs(new Foo)).not.toContain(Object);
  expect(toPairs(new Foo)).not.toContain(String);
  expect(toPairs(new Foo)).not.toContain(undefined);
});

});
