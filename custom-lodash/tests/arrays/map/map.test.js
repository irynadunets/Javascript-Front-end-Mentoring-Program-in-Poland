const map = require('./map');

describe("map function", () => {

function square(n) {
  return n * n;
}

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

const tests = [
  [
    [4, 8],
    square,
    [16, 64],
  ],
  [
    { 'a': 4, 'b': 8 },
    square,
    [16, 64],
  ],
  [
     users,
     'user',
     ['barney', 'fred'],
  ]
];


test.each(tests)('Should be type Array and NOT to be string, function,number type', (input, func) => {
   expect(Array.isArray(map(input, func))).toBe(true);
   expect(map(input, func)).not.toBeInstanceOf(String);
   expect(map(input, func)).not.toBeInstanceOf(Function);
   expect(map(input, func)).not.toBeInstanceOf(Number);
});


test.each(tests)('Creates an array of values by running each element in collection thru iteratee',(input, func, output) =>{
  expect(map(input, func)).toStrictEqual(output)
})

});
