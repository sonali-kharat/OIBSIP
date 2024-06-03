// script.js
let display = document.getElementById('display');
let currentInput = '';
let previousAnswer = '';
let lastOperation = '';

function appendDigit(digit) {
    currentInput += digit;
    updateDisplay();
}

function appendCharacter(char) {
    if (char === '√') {
        currentInput += 'Math.sqrt(';
    } else {
        currentInput += char;
    }
    updateDisplay();
}

function useAnswer() {
    currentInput += previousAnswer;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        lastOperation = currentInput.replace(/÷/g, '/').replace(/x/g, '*');
        previousAnswer = eval(lastOperation).toString();
        currentInput = previousAnswer;
        updateDisplay();
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
