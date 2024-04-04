let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}
function deletecharacter(){
    display.value = display.value.slice(0, -1);
}
function calculatePercentage() {
    display.value = eval(display.value) / 100;
}

function addToDisplay(value) {
  document.getElementById('display').value += value;
}
var isOpeningBracket = true;

function toggleBracket() {
    var display = document.getElementById('display');
    if (isOpeningBracket) {
        display.value += '(';
    } else {
        display.value += ')';
    }
    isOpeningBracket = !isOpeningBracket;
}

function calculate() {
  var display = document.getElementById('display');
  var equation = display.value;

  // Replace 'x' with '*'
  equation = equation.replace(/x/g, '*');

  // Evaluate the expression
  try {
      display.value = eval(equation);
  } catch (error) {
      display.value = 'Error';
  }
}



function toggleTheme() {
  var switchControl = document.getElementById('themeToggle');
  var theme = document.getElementById('theme');
  var darkTheme = document.getElementById('darkTheme');

  // Toggle theme based on switch state
  if (switchControl.checked) {
      // Enable light theme
      theme.href = 'light-theme.css';
      darkTheme.disabled = true; // Disable dark theme
  } else {
      // Enable dark theme
      theme.href = 'dark-theme.css';
      darkTheme.disabled = false; // Enable dark theme
  }
}
