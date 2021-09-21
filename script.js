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
})
// plus button
const plusButton = document.getElementById('plus');
plusButton.addEventListener("click", () => {
    if (var1.length != 0 && output == "") {
        output = var1 + " + ";
        outputText.textContent = output;
        resultText.textContent = "";
    }
    else if (var1.length != 0 && var2.length != 0 && output != ""){
        result = +var1 + +var2;
        output = result + " + ";
        var1 = result;
        var2 = "";
        outputText.textContent = output;
        resultText.textContent = result;
    }
})

// minus button
const minusButton = document.getElementById('minus');
minusButton.addEventListener("click", () => {
    if (var1.length != 0 && output == "") {
        output = var1 + " - ";
        outputText.textContent = output;
        resultText.textContent = "";
    }
    else if (var1.length != 0 && var2.length != 0 && output != "") {
        result = +var1 - +var2;
        output = result + " - ";
        var1 = result;
        var2 = "";
        outputText.textContent = output;
        resultText.textContent = result;
    }
})

