//globals
let chosenFunction = "";

let num1 = 0;
let num2 = 0;

let outcomeNum = 0;
let outcomeStr = "";

let thisNumStr = "";
let lastNumStr = "";

initializeNumBtns();
initializeClearBtn();
initializeFunctionBtns();

//display thisNumStr the entire time
//when an operator button is pressed, set lastNumStr equal to thisNumStr and clear thisNumStr
//add do whatever to them and store 


//add functionality to buttons
function updateScreen() {
    const screen = document.querySelector(".screen");
    screen.textContent = thisNumStr;
}

function initializeClearBtn () {
    const clearBtn = document.querySelector(".clearBtn");
    clearBtn.addEventListener("click", (e) => {
        console.log("it worked")
        num1 = 0;
        num2 = 0;
        outcomeNum = 0;
        outcomeStr = "";
        thisNumStr = "";
        lastNumStr = "";
        updateScreen();
    })
}

function initializeNumBtns(){ 
    const numBtnsList = document.querySelectorAll(".numBtn");
    for (let i = 0; i < numBtnsList.length; i++) {
        console.log(numBtnsList[i].textContent);
        numBtnsList[i].addEventListener ("click", (e) => {
            thisNumStr += numBtnsList[i].textContent;
            updateScreen();
        })
    }
}

function initializeFunctionBtns () {
    const functionBtnsList = document.querySelectorAll(".functionBtn");
    for (let i = 0; i < functionBtnsList.length; i++) {
        functionBtnsList[i].addEventListener("click", (e) => {
            chosenFunction = functionBtnsList[i].textContent;
        })
    }
}

function initializeEqualsBtn() {
    const equalsBtn = document.querySelector("equalsBtn");
    equalsBtn.addEventListener("click", (e) => {
        outcomeNum = operate();
        currentNum = outcomeNum;
        thisNumStr = outcomeNum.toString();
        lastNumStr = "";
        updateScreen();
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
    if (operator === "plus") {
        return add(a,b);
    }
    if (operator === "minus") {
        return subtract(a,b);
    }
    if (operator === "dividedBy") {
       return divide (a,b);
    }
    if (operator === "times") {
        return multiply(a,b);
    }
}