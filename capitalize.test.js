const capitalize = require('./capitalize');

test('should capitalize the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
