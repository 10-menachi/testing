class Calculator {
  constructor(leftNum, rightNum) {
    this.leftNum = leftNum;
    this.rightNum = rightNum;
  }

    add = () => this.leftNum + this.rightNum;

    subtract = () => this.leftNum - this.rightNum;

    multiply = () => this.leftNum * this.rightNum;

    divide = () => this.leftNum / this.rightNum;
}

module.exports = Calculator;