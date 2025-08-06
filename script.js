const equals = document.querySelector("#equals");
const allButtons = document.querySelector("button");




allButtons.addEventListener("click",clickHandler);


let calculation = {
    first: "",
    second: "",
    operator: "",
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function clearCalculation() {
    for(let i in calculation) {
        i = "";
    }
}

function clickHandler(click) {
    const target = click.target;
    if(target.classList.contains("number")) {
        numberHandler(target);
    } else if(target.classList.contains("operator")) {
        operatorHandler(target);
    } else if(target.classList.contains("special")) {
        specialHandler(target);
    }
}

function numberHandler(button) {
    if(calculation.first) {

    }
}

function operatorHandler(button) {

}

function specialHandler(button) {

}
