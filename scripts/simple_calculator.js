const calcDisplay = document.getElementById("calcDisplay");

function appendToDisplay(input){
    calcDisplay.value += input; 
}

function clearDisplay(){
    calcDisplay.value = '';
}
function deleteLastCharacter() {
    // Remove the last character from the display
    calcDisplay.value = calcDisplay.value.slice(0, -1);
}


function calculate(){
    try {
            // Replace percentage symbol with its decimal representation
        let expression = calcDisplay.value.replace(/%/g, '/100');

            // Replace exponentiation (^) with the power expression
            expression = expression.replace(/\^/g, '**');

            // Replace square root (√) with the Math.sqrt function including parentheses
            expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');

        calcDisplay.value = eval(expression);
    } catch (error) {
        calcDisplay.value = "Error";
    }
}