class Calculator {
    constructor(number1, number2, operator) {
        this.number1 = Number(number1);
        this.number2 = Number(number2);
        this.operator = String(operator)
    }
    calculate(){
        switch (this.operator) {
            case '+':
                return this.number1 + this.number2;
            case '-':
                return this.number1 - this.number2;
            case '*':
                return this.number1 * this.number2;
            case '/':
                if (this.number2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                return this.number1 / this.number2;
            default:
                throw new Error("Invalid operator. Use +, -, *, or /.");
        }
    }
}

let calculator = new Calculator(1,2,'/');
console.log(calculator.calculate());
