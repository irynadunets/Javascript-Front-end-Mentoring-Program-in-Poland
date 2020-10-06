const dropWhile = require('./dropWhile');

describe("dropWhile function", () => {

var users = [
{ 'user': 'barney',  'active': false },
{ 'user': 'fred',    'active': false },
{ 'user': 'pebbles', 'active': true }
];

const tests = [
  [
  function(o) { return !o.active; },
    [{user: "pebbles", active: true}],
  ],
  [
     { 'user': 'barney', 'active': false },
     [{user:"fred", active:false}, {user:"pebbles", active:true}],
  ],
  [
     ['active', false],
     [{user: "pebbles", active: true}],
  ],
  [
     'active',
     [
    { user: 'barney',  active: false },
    { user: 'fred',  active: false },
    { user: 'pebbles', active: true }
  ],
],
];


test.each(tests)('Should be type Array and NOT to be string, function type', (input) => {
   expect(Array.isArray(dropWhile(users,input))).toBe(true);
   expect(dropWhile(users,input)).not.toBeInstanceOf(String);
   expect(dropWhile(users,input)).not.toBeInstanceOf(Function);
   expect(dropWhile(users,input)).not.toBeInstanceOf(Number);
});


test.each(tests)('Creates a slice of array excluding elements dropped until predicate returns falsey',(input, output) =>{
  expect(dropWhile(users,input)).toStrictEqual(output)
})

test('should NOT contain elements until predicate returns falsey', () => {
  expect(dropWhile(users,{ 'user': 'barney', 'active': false })).not.toContain({ 'user': 'barney',  'active': false });
  expect(dropWhile(users,function(o) { return !o.active; })).not.toContain({ user: 'barney',  active: false },
  { user: 'fred',  active: false });
  expect(dropWhile(users,'active', false)).not.toContain({ user: 'barney',  active: false },
  { user: 'fred',  active: false });
});

});
