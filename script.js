let display = document.getElementById('display');
let currentValue = '0';

function appendNumber(number) {
  if (currentValue === '0') {
    currentValue = number;
  } else {
    currentValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentValue += operator;
  updateDisplay();
}
function deleteLast() {
  if (currentValue.includes('Error') || currentValue.length <= 1) {
    display.style.backgroundColor = '#181F32';
    currentValue = '0';
  } else {
    currentValue = currentValue.slice(0, -1);
  }
  updateDisplay();
}


function resetDisplay() {
  currentValue = '0';
  display.style.backgroundColor = '#181F32';
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentValue).toString();

    if (result.includes('.')) {
      result = parseFloat(result).toFixed(3);
    }

    currentValue = result;
    display.style.backgroundColor = '#020202';
  } catch (error) {
    currentValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentValue;
}
