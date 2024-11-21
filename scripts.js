let display = document.getElementById('display')

function appendNumber(number){
    display.value += number;
}

function appendOperator(operator){
    display.value += '' + operator + '';
}

function clearDisplay(){
    display.value = '';
}

function deleteLast(){
    display.value = display.value.slice(0,-1)
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch(error){
        display.value = 'Error'
    }
    }

function toggleDarkMode() {
    const calculator = document.getElementById('calculator');
    
    const button = document.getElementById('dark-mode');  // Make sure the correct ID is used
        
        // Toggle the 'dark-mode' class on the body and calculator
    
    calculator.classList.toggle('dark-mode');
        
        // Change the button text based on the current mode
    if (calculator.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';  // Switch to Light Mode when dark mode is active
        } else {
        button.textContent = 'Dark Mode';  // Switch back to Dark Mode when in light mode
    }
}

