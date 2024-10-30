const display = document.getElementById('display');
let num1 = "";
let num2 = "";
let operator = "";

function updateDisplay(value) {
    if (!operator) {
        num1 += value;
        display.value = num1;
    } else {
        num2 += value;
        display.value = num2;
    }
}

function setOperator(value) {
    operator = value;
    display.value = operator;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case '%':
            result = parseFloat(num1) % parseFloat(num2);
            break;
        default:
            result = "";
    }
    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}

function clearAll() {
    num1 = "";
    num2 = "";
    operator = "";
    display.value = "0";
}

function clearEntry() {
    if (num2) {
        num2 = "";
    } else if (operator) {
        operator = "";
    } else {
        num1 = "";
    }
    display.value = "0";
}