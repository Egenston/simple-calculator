let var1 = "";
let var2 = "";
let operation = "";
let output = "";
let result = 0;
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
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
document.addEventListener("keydown", (event) => {
    if(numbers.includes(event.key)){
        if (output == "") {
            var1 += event.key;
            if (var1.length >= 12) {
                resultText.style.fontSize = "27px";
                resultText.textContent = "The number is too big";
                var1 = "";
            }
            else {
                resultText.style.fontSize = "40px";
                resultText.textContent = var1;
            }
        }
        else if (output.charAt(output.length - 2) == "=") {
            var1 = "";
            var1 += event.key;
            resultText.textContent = var1;
            output = "";
            outputText.textContent = output;
        }
        else {
            var2 += event.key;
            if (var2.length >= 12) {
                resultText.style.fontSize = "27px";
                resultText.textContent = "The number is too big";
                var2 = "";
            }
            else {
                resultText.style.fontSize = "40px";
                resultText.textContent = var2;
            }
        }
    }
})

// dot button
const dotButton = document.getElementById('dot');
function dotCode() {
    if (output == "") {
        if (!var1.includes(".") && var1.length >= 1) {
            var1 += ".";
            resultText.textContent = var1;
        }
    }
    else {
        if (!var2.includes(".") && var2.length >= 1) {
            var2 += ".";
            resultText.textContent = var2;
        }
    } 
}
dotButton.addEventListener("click", () => {
    dotCode();
});
document.addEventListener("keydown", (event) => {
    if(event.key == "."){
        dotCode();
    }
})

// remove button
const removeButton = document.getElementById('remove-button');
function remove() {
    if (output == "") {
        if (var1.length >= 1) {
            var1 = var1.substring(0, var1.length - 1);
            resultText.textContent = var1;
        }
    }
    else {
        if (var2.length >= 1) {
            var2 = var2.substring(0, var2.length - 1);
            resultText.textContent = var2;
        }
    }  
}
removeButton.addEventListener("click", () =>{
    remove();
})
document.addEventListener('keydown', (event) => {
    if(event.code == "Backspace"){
        remove();
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

//calculation functions
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
function topOutput(operationSign, operationName) {
    output = var1 + operationSign;
    outputText.textContent = output;
    operation = operationName;
}
function chooseOperation(operationSign, operationName) {
    if (var1.length != 0 && (output == "" || (output != "" && var2.length == 0))) {
        topOutput(operationSign, operationName);
    }
    else if (var1.length != 0 && var2.length != 0 && output != "") {
        operate();
        topOutput(operationSign, operationName);
    }
}

// plus button
const plusButton = document.getElementById('plus');
plusButton.addEventListener("click", () => {
    chooseOperation(" + ", "plus");
});
document.addEventListener("keydown", (event) =>{
    if(event.key == "+"){
        chooseOperation(" + ", "plus");
    }
})

// minus button
const minusButton = document.getElementById('minus');
minusButton.addEventListener("click", () => {
    chooseOperation(" - ", "minus");
});
document.addEventListener("keydown", (event) => {
    if (event.key == "-") {
        chooseOperation(" - ", "minus");
    }
})

// times button
const timesButton = document.getElementById('times');
timesButton.addEventListener("click", () => {
    chooseOperation(" * ", "times");
});
document.addEventListener("keydown", (event) => {
    if (event.key == "*") {
        chooseOperation(" * ", "times");
    }
})

// divide button
const divideButton = document.getElementById('divide');
divideButton.addEventListener("click", () => {
    chooseOperation(" / ", "divide");
});
document.addEventListener("keydown", (event) => {
    if (event.key == "/") {
        chooseOperation(" / ", "divide");
    }
})

// equals button
function equalsCode() {
    if (var1.length != 0 && var2.length != 0 && output.charAt(output.length - 2) != "=") {
        output += var2 + " = ";
        operate();
        operation = "";
        outputText.textContent = output;
    }
}
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener("click", () => {
    equalsCode();
});
document.addEventListener("keydown", (event) => {
    if(event.key == "=" || event.key == "Enter"){
        equalsCode();
    }
})

