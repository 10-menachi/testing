const reverseString = require('./reverseString');

describe('Test for reverseString function', () => {
  test('should return a reversed version of a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
