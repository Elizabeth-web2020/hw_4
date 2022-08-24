function concatStrings(str, separator = '') {
  if (typeof separator !== 'string') separator = '';

  return function(str1) {
    if (str1 === undefined) return str;
    if (typeof str1 !== 'string') str1 = '';

    return concatStrings(`${str}${separator}${str1}`, `${separator}`);
  }
}

const result =  concatStrings('some-value')('333')(123n)();

// ====================================================================

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  setX(num) {
    const condition = !num || num === Infinity || num === -Infinity || typeof num === 'bigint' || isNaN(num) || typeof num !== 'number';
    
    if (condition) {
      throw Error('invalid first parameters');
    }

    this.num1 = num;
  }

  setY(num) {
    const condition = !num || num === Infinity || num === -Infinity || typeof num === 'bigint' || isNaN(num) || typeof num !== 'number';

    if (condition) {
      throw Error('invalid second parameter');
    }

    this.num2 = num;
  }

  logSum() {
    const condition = !this.num1 || !this.num2 || this.num1 === Infinity || this.num2 === Infinity || this.num1 === -Infinity || this.num2 === -Infinity || isNaN(this.num1) || isNaN(this.num2) || typeof this.num1 !== 'number' || typeof this.num2 !== 'number' || typeof this.num1 === 'bigint' || typeof this.num2 === 'bigint';

    if (condition) {
      throw Error('invalid parameters');
    }

    return `${this.num1 + this.num2}`;
  }

  logMul() {
    const condition = !this.num1 || !this.num2 || this.num1 === Infinity || this.num2 === Infinity || this.num1 === -Infinity || this.num2 === -Infinity || isNaN(this.num1) || isNaN(this.num2) || typeof this.num1 !== 'number' || typeof this.num2 !== 'number' || typeof this.num1 === 'bigint' || typeof this.num2 === 'bigint';

    if (condition) {
      throw Error('invalid parameters');
    }

    return `${this.num1 * this.num2}`;
  }

  logSub() {
    const condition = !this.num1 || !this.num2 || this.num1 === Infinity || this.num2 === Infinity || this.num1 === -Infinity || this.num2 === -Infinity || isNaN(this.num1) || isNaN(this.num2) || typeof this.num1 !== 'number' || typeof this.num2 !== 'number' || typeof this.num1 === 'bigint' || typeof this.num2 === 'bigint';

    if (condition) {
      throw Error('invalid parameters');
    }

    return `${this.num1 - this.num2}`;
  }

  logDiv() {
    const condition = !this.num1 || !this.num2 || this.num1 === Infinity || this.num2 === Infinity || this.num1 === -Infinity || this.num2 === -Infinity || isNaN(this.num1) || isNaN(this.num2) || typeof this.num1 !== 'number' || typeof this.num2 !== 'number' || typeof this.num1 === 'bigint' || typeof this.num2 === 'bigint';

    if (condition) {
      throw Error('invalid parameters');
    }

    return `${this.num1 / this.num2}`;
  }
}

const calculator = new Calculator(12, 3);

calculator.logSum(); 
calculator.logMul(); 
calculator.logDiv(); 
calculator.setX(15);
calculator.logDiv(); 

const logCalculatorDiv = calculator.logDiv.bind(calculator);

logCalculatorDiv();
calculator.setY(444n); 
