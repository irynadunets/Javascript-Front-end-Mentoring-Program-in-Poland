const find = require('./find');


describe("find function", () => {

  var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

const tests = [
  [
    function(o) { return o.age < 40; },
    { 'user': 'barney',  age: 36, active: true },
  ],
  [
     { 'age': 1, 'active': true },
     [{ user: 'pebbles', age: 1,  active: true }],
  ],
  [
     ['active', false],
     [{ user: 'fred',   age: 40, active: false }],
  ],
  [
     'active',
    { user: 'barney', age: 36, active: true },
],
];


test.each(tests)('Should be type object and NOT to be string, function, number types', (input) => {
   expect(typeof find(users,input) === "object").toBe(true);
   expect(find(users,input)).not.toBeInstanceOf(String);
   expect(find(users,input)).not.toBeInstanceOf(Function);
   expect(find(users,input)).not.toBeInstanceOf(Number);
});


test.each(tests)('Iterates over elements of collection, returning the first element predicate returns truthy for',(input, output) =>{
  expect(find(users,input)).toStrictEqual(output)
})

test('should NOT contain elements except the first element predicate returns truthy for', () => {
  expect(find(users,function(o) { return !o.active; })).not.toContain({ 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true });
  expect(find(users,{ 'age': 1, 'active': true })).not.toContain({ 'user': 'fred',   'age': 40, 'active': false },{ 'user': 'barney', 'age': 36, 'active': true });
  expect(find(users,'active', false)).not.toContain({ 'user': 'barney', 'age': 36, 'active': true },{ 'user': 'pebbles', 'age': 1,  'active': true });
  expect(find(users,'active')).not.toContain({ 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true });
});

});
