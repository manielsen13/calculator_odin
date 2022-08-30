//globals
let chosenFunction = "";
let justHitEquals = false

let thisNumStr = "";
let lastNumStr = "";

initializeNumBtns();
initializeClearBtn();
initializeFunctionBtns();
initializeEqualsBtn();

//add functionality to buttons
function updateScreen(displayThisNum) {
    const screen = document.querySelector(".screen");
    screen.textContent = displayThisNum;
}

function initializeClearBtn () {
    const clearBtn = document.querySelector(".clearBtn");
    clearBtn.addEventListener("click", (e) => {
        thisNumStr = "";
        lastNumStr = "";
        chosenFunction = "";
        justHitEquals = false;
        updateScreen(thisNumStr);
    })
}

function initializeNumBtns(){ 
    const numBtnsList = document.querySelectorAll(".numBtn");
    for (let i = 0; i < numBtnsList.length; i++) {
        numBtnsList[i].addEventListener ("click", (e) => {
            if (thisNumStr.length > 20) {
                return;
            }
            if (justHitEquals) {
                return;
            }
            thisNumStr += numBtnsList[i].textContent;
            updateScreen(thisNumStr);
        })
    }
}

function initializeFunctionBtns () {
    const functionBtnsList = document.querySelectorAll(".functionBtn");
    for (let i = 0; i < functionBtnsList.length; i++) {
        functionBtnsList[i].addEventListener("click", (e) => {
            if (thisNumStr != "" && lastNumStr != "") {
                lastNumStr = operate(parseInt(lastNumStr), parseInt(thisNumStr), chosenFunction).toString();
                thisNumStr = "";
                justHitEquals = false;
                updateScreen(lastNumStr);
                chosenFunction = functionBtnsList[i].textContent;
                return;
            } else if (thisNumStr=="" && lastNumStr!="") {
                return;
            } else
            {
                chosenFunction = functionBtnsList[i].textContent;
                lastNumStr = thisNumStr;
                thisNumStr = "";
                justHitEquals = false;
                return;
            }
        })
    }
}

function initializeEqualsBtn() {
    const equalsBtn = document.querySelector(".equalsBtn");
    equalsBtn.addEventListener("click", (e) => {
        //check if both button values are filled in
        if (thisNumStr != "" && lastNumStr != "") {
            thisNumStr = operate(parseInt(lastNumStr), parseInt(thisNumStr), chosenFunction).toString();
            lastNumStr = "";
            justHitEquals = true;
            updateScreen(thisNumStr);
        }
    })
}

//Operations functions
function add (a,b) {
    return a + b;
}
function subtract (a,b) {
    return a - b;
}
function multiply (a,b) {
    return a * b;
}
function divide (a,b) {
    return a / b;
}

function operate (a,b, operator) {
    if (operator === "+") {
        return +add(a,b).toFixed(5);
    }
    if (operator === "-") {
        return +subtract(a,b).toFixed(5);
    }
    if (operator === "/") {
        return +divide(a,b).toFixed(5);
    }
    if (operator === "x") {
        return +multiply(a,b).toFixed(5);
    }
}