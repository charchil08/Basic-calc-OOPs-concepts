class Calculator {

    constructor() {
        this.firstInput = this._takeInput("First number ");
        this.secondInput = this._takeInput("Second number ");
        this.operation = this._takeInput(`any operation 
        + for add
        - for subtract
        * for multiply
        / for division`);

        this.firstNumber = null;
        this.secondNumber = null;
        this.result = null;

        console.log(typeof (this.operation), typeof (this.firstInput), typeof (this.secondInput));
    }

    _takeInput(sentence) {
        return prompt(`Enter ${sentence}`)
    }

    checkIsValid() {

        let isValidOperator = false;
        let isValidNumber = false;

        try {
            switch (this.operation) {
                case "+":
                case "-":
                case "*":
                case "/":
                    isValidOperator = true;
                    break;
                default:
                    isValidOperator = false;
            }

            isValidNumber = !isNaN(this.firstInput) && !isNaN(this.secondInput);

            if (isValidOperator && isValidNumber) {
                return true;
            }
            throw new Error("Invalid numbers or operators")
        }
        catch (err) {
            alert(`${err.message}`);
        }
    }

    numberConversion() {
        this.firstNumber = Number(this.firstInput);
        this.secondNumber = Number(this.secondInput);
    }

    calculate() {
        switch (this.operation) {
            case "+":
                this.result = this.firstNumber + this.secondNumber;
                break;
            case "-":
                this.result = this.firstNumber - this.secondNumber;
                break;
            case "*":
                this.result = this.firstNumber * this.secondNumber;
                break;
            case "/":
                try {
                    if (this.secondNumber === 0) {
                        throw new Error("Divison by 0 is not allowed");
                    }
                    this.result = this.firstNumber / this.secondNumber;
                    break;
                }
                catch (err) {
                    alert(err.message);
                }
            default:
                alert("Invalid operator");
                return null;
        }
        return this.result;
    }
}


const startBtn = document.getElementById('start');

startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const calc = new Calculator();

    if (calc.checkIsValid()) {
        calc.numberConversion();
        calc.calculate();
        if (calc.result !== null) {
            alert(`${calc.firstNumber} ${calc.operation} ${calc.secondNumber} = ${calc.result.toFixed(2)}`)
            return;
        }
    }
})