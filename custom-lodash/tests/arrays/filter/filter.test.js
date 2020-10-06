const filter = require('./filter');

describe("filter function", () => {

  var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
  ];

const tests = [
  [
    function(o) { return !o.active; },
    [{ user: 'fred',   age: 40, active: false }],
  ],
  [
     { 'age': 36, 'active': true },
     [{ user: 'barney', age: 36, active: true }],
  ],
  [
     ['active', false],
     [{ user: 'fred',   age: 40, active: false }],
  ],
  [
     'active',
     [
    { user: 'barney', age: 36, active: true }
  ],
],
];


test.each(tests)('Should be type Array and NOT to be string, function type', (input) => {
   expect(Array.isArray(filter(users,input))).toBe(true);
   expect(filter(users,input)).not.toBeInstanceOf(String);
   expect(filter(users,input)).not.toBeInstanceOf(Function);
   expect(filter(users,input)).not.toBeInstanceOf(Number);
});


test.each(tests)('Iterates over elements of collection, returning an array of all elements predicate returns truthy for',(input, output) =>{
  expect(filter(users,input)).toStrictEqual(output)
})

test('should NOT contain elements until predicate returns falsey', () => {
  expect(filter(users,{ 'age': 36, 'active': true })).not.toContain({ 'user': 'fred',   'age': 40, 'active': false });
  expect(filter(users,function(o) { return !o.active; })).not.toContain({ 'user': 'barney', 'age': 36, 'active': true });
  expect(filter(users,'active', false)).not.toContain({ 'user': 'barney', 'age': 36, 'active': true });
  expect(filter(users,'active')).not.toContain({ 'user': 'fred',   'age': 40, 'active': false });
});

});
