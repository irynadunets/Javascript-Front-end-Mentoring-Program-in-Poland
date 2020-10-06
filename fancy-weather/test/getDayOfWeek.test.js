const getDayOfWeek = require('./getDayOfWeek');

test('day of week 2020-06-08 to equal Monday', () => {
  expect(getDayOfWeek('2020-06-08')).toBe("Monday");
});
