let currentInput = '';
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperation) {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), currentOperation);
    }

    currentOperation = operation;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (currentInput === '' || currentOperation === null) return;

    const secondOperand = parseFloat(currentInput);
    const result = calculate(firstOperand, secondOperand, currentOperation);
    currentInput = result.toString();
    firstOperand = null;
    currentOperation = null;
    updateDisplay();
}

function calculate(firstOperand, secondOperand, operation) {
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}
``
