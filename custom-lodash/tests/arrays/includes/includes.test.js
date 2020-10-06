const includes = require('./includes');

describe("includes function", () => {

  test('Should be defined', () => {
    expect(includes([1, 2, 3], 1)).toBeDefined();
    expect(includes([1, 2, 3], 1)).not.toBeUndefined();
    expect(includes([1, 2, 3], 1, 2)).toBeDefined();
    expect(includes([1, 2, 3], 1, 2)).not.toBeUndefined();
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toBeDefined();
    expect(includes({ 'a': 1, 'b': 2 }, 1)).not.toBeUndefined();
    expect(includes('abcd', 'bc')).toBeDefined();
    expect(includes('abcd', 'bc')).not.toBeUndefined();
  });

  test('Checks if value is in collection', () => {
    expect(includes([1, 2, 3], 1)).toStrictEqual(true);
    expect(includes([1, 2, 3], 1, 2)).toStrictEqual(false);
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toStrictEqual(true);
    expect(includes('abcd', 'bc')).toStrictEqual(true);
  });

});
