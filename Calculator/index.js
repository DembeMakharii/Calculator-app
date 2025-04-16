// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    // Append the input to the display
     display.value += input;
}
 
function clearDisplay() {
    display.value = "";

}
function calculate() {
    display.value = eval(display.value);
    // Evaluate the expression in the display

}