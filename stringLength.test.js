const stringLength = require('./stringLength');

describe('Test for stringLength function', () => {
  test('should throw an error if the string is too long', () => {
    expect(() => stringLength('This string is too long')).toThrow(Error('String is too long'));
  });

  test('should throw an error if the string is empty', () => {
    expect(() => stringLength('')).toThrow(Error('String is empty'));
  });
});
