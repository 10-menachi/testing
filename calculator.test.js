const Calculator = require('./calculator');

describe('Tests for Calculator Functions', () => {
  const calc = new Calculator(10, 5);
  test('should return the sum of two numbers', () => {
    expect(calc.add()).toBe(15);
  });
  test('should return the difference of two numbers', () => {
    expect(calc.subtract()).toBe(5);
  });
  test('should return the product of two numbers', () => {
    expect(calc.multiply()).toBe(50);
  });
  test('should return the quotient of two numbers', () => {
    expect(calc.divide()).toBe(2);
  });
});
