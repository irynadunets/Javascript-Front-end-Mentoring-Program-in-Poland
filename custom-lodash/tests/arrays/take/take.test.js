const take = require('./take');

describe("take function", () => {

const tests = [
  [
    [1, 2, 3],
    ,
    [1],
  ],
  [
    [1, 2, 3],
    2,
    [1, 2],
  ],
  [
    [1, 2, 3],
     5,
     [1, 2, 3],
  ],
  [
    [1, 2, 3],
     0,
     [],
  ]
];


test.each(tests)('Should be type Array and NOT to be string, function, number type', (input, func) => {
   expect(Array.isArray(take(input, func))).toBe(true);
   expect(take(input, func)).not.toBeInstanceOf(String);
   expect(take(input, func)).not.toBeInstanceOf(Function);
   expect(take(input, func)).not.toBeInstanceOf(Number);
});

test.each(tests)('Creates a slice of array with n elements taken from the beginning',(input, func, output) =>{
  expect(take(input, func)).toStrictEqual(output);
});

test('should NOT contain elements ', () => {
    expect(take([1, 2, 3])).not.toContain(2,3);
    expect(take([1, 2, 3], 2)).not.toContain(3);
    expect(take([1, 2, 3], 0)).not.toContain(1,2,3);    
  });

});
