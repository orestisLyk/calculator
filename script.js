const equals = document.querySelector("#equals");
const controlsContainer = document.querySelector("#controls-container");
const display = document.querySelector("#display");



controlsContainer.addEventListener("click",clickHandler);

//cursorFlag:  False for left, True for right
let calculation = {
    first: "",
    second: "",
    operator: "",
    cursorFlag: false,
}

function clearCalculation() {
    calculation.first = "";
    calculation.operator = "";
    calculation.second = "";
    calculation.cursorFlag = false;
}

function refreshDisplay() {
    let displayed = calculation.first;
    displayed += " " + calculation.operator;
    displayed += " " + calculation.second;
    display.textContent = displayed;
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
    refreshDisplay();
}

function numberHandler(button) {
    if(!calculation.cursorFlag) {
        calculation.first += String(button.textContent);
    } else {
        calculation.second += String(button.textContent);
    }
}

function operatorHandler(button) {
    if(!calculation.cursorFlag) {
        if(calculation.first === "" && button.textContent === "-") {
            calculation.first = "-"
        } else {   
        calculation.operator = button.textContent;
        calculation.cursorFlag = true;
        }
    } else {
        let op = calculation.operator;
        equalsHandler();
        calculation.operator = op;
        calculation.cursorFlag = true;
    }
    
}

function specialHandler(button) {
    if(button.id === "equals") {
        equalsHandler();
    } else {
        clearCalculation();
    }
}

function equalsHandler() {
    const a = Number(calculation.first);
    const b = Number(calculation.second);
    const x = calculation.operator;
    let result = 0;
    if(x === "+") {
        result = a + b;
    } else if(x === "-") {
        result = a - b;
    } else if(x === "x") {
        result = a * b;
    } else if(x === "/") {
        result = a / b;
    }
    clearCalculation();
    calculation.first = result;
}
