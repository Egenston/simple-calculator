let var1 = "";
let var2 = "";
let operation = "";
let output = "";
let result = 0;
const numberButtons = document.querySelectorAll('.number');
const outputText = document.querySelector('#calculation');
const resultText = document.querySelector('#result');
// number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(output == ""){
            var1 += button.value;
            if(var1.length >= 12){
                resultText.style.fontSize = "27px";
                resultText.textContent = "The number is too big";
                var1 = "";
            }
            else{
                resultText.style.fontSize = "40px";
                resultText.textContent = var1;
            } 
        }
        else if(output.charAt(output.length-2) == "="){
            var1 = "";
            var1 += button.value;
            resultText.textContent = var1;
            output = "";
            outputText.textContent = output;
        }
        else{
            var2 += button.value;
            if(var2.length >= 12){
                resultText.style.fontSize = "27px";
                resultText.textContent = "The number is too big";
                var2 = "";
            }
            else {
                resultText.style.fontSize = "40px";
                resultText.textContent = var2;
            }
        }        
    })  
});
// dot button
const dotButton = document.getElementById('dot');
dotButton.addEventListener("click", () => {
    if(output == ""){
        if(!var1.includes(".") && var1.length >= 1){
            var1 += ".";
            resultText.textContent = var1;
        }
    }
    else{
        if (!var2.includes(".") && var2.length >= 1) {
            var2 += ".";
            resultText.textContent = var2;
        }
    }
})
// remove button
const removeButton = document.getElementById('remove-button');
removeButton.addEventListener("click", () =>{
    if(output == ""){
        if(var1.length>=1){
            var1 = var1.substring(0, var1.length-1);
            resultText.textContent = var1;
        }
    }
    else{
        if (var2.length >= 1) {
            var2 = var2.substring(0, var2.length - 1);
            resultText.textContent = var2;
        }
    }
})
// clear button
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener("click", () =>{
    var1 = "";
    var2 = "";
    output = "";
    result = "";
    outputText.textContent = "";
    resultText.textContent = "";
});
function operate() {
    if(operation == "plus"){
        result = +var1 + +var2;
    }
    else if(operation == "minus"){
        result = +var1 - +var2;
    }
    else if(operation == "times"){
        result = +var1 * +var2;
    }
    else if(operation == "divide"){
        if(+var2 != 0){
            result = +var1 / +var2;
        }
        else{
            alert("Divide by 0 impossible.");
            result = +var1;
        }
    }
    result = parseFloat(result.toFixed(2));
    resultText.textContent = result;
    var1 = result.toString();
    var2 = "";
}
// plus button
const plusButton = document.getElementById('plus');
plusButton.addEventListener("click", () => {
    if (var1.length != 0 && (output == "" || (output != "" && var2.length == 0))){
        output = var1 + " + ";
        outputText.textContent = output;
        operation = "plus";
    }
    else if(var1.length != 0 && var2.length != 0 && output != ""){
        operate();
        output = var1 + " + ";
        outputText.textContent = output;
        operation = "plus";
    }
});
// minus button
const minusButton = document.getElementById('minus');
minusButton.addEventListener("click", () => {
    if (var1.length != 0 && (output == "" || (output != "" && var2.length == 0))) {
        output = var1 + " - ";
        outputText.textContent = output;
        operation = "minus";
    }
    else if (var1.length != 0 && var2.length != 0 && output != "") {
        operate();
        output = var1 + " - ";
        outputText.textContent = output;
        operation = "minus";
    }
});
// times button
const timesButton = document.getElementById('times');
timesButton.addEventListener("click", () => {
    if (var1.length != 0 && (output == "" || (output != "" && var2.length == 0))) {
        output = var1 + " * ";
        outputText.textContent = output;
        operation = "times";
    }
    else if (var1.length != 0 && var2.length != 0 && output != "") {
        operate();
        output = var1 + " * ";
        outputText.textContent = output;
        operation = "times";
    }
});
// divide button
const divideButton = document.getElementById('divide');
divideButton.addEventListener("click", () => {
    if (var1.length != 0 && (output == "" || (output != "" && var2.length == 0))) {
        output = var1 + " / ";
        outputText.textContent = output;
        operation = "divide";
    }
    else if (var1.length != 0 && var2.length != 0 && output != "") {
        operate();
        output = var1 + " / ";
        outputText.textContent = output;
        operation = "divide";
    }
});
// equals button
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener("click", () => {
    if(var1.length != 0 && var2.length != 0 && output.charAt(output.length-2) != "="){
        output += var2 + " = ";
        operate();
        operation = "";
        outputText.textContent = output;
    }
});

