//globals
let chosenFunction = "";

let thisNumStr = "";
let lastNumStr = "";

initializeNumBtns();
initializeClearBtn();
initializeFunctionBtns();
initializeEqualsBtn();

//note--doesn't work after I press equals and then a function(need to go through scenarios and write more if statements under the functions and equals buttons) 
//note--add something to limit the decimals
//note--touch up the handling of dividing by zero
//note--add a limit to how big the numbers can get when typing them in

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
        updateScreen(thisNumStr);
    })
}

function initializeNumBtns(){ 
    const numBtnsList = document.querySelectorAll(".numBtn");
    for (let i = 0; i < numBtnsList.length; i++) {
        numBtnsList[i].addEventListener ("click", (e) => {
            thisNumStr += numBtnsList[i].textContent;
            updateScreen(thisNumStr);
        })
    }
}

function initializeFunctionBtns () {
    const functionBtnsList = document.querySelectorAll(".functionBtn");
    for (let i = 0; i < functionBtnsList.length; i++) {
        functionBtnsList[i].addEventListener("click", (e) => {
            //need to change the currentNumStr, to the pastNumStr, and clear the current, also need to operate on them for the running total
            //operate here if both nums are full (because that would mean 3 numbers have been written in) Put that on display until the user starts typing in the next number
            if (thisNumStr != "" && lastNumStr != "") {
                lastNumStr = operate(parseInt(lastNumStr), parseInt(thisNumStr), chosenFunction).toString();
                thisNumStr = "";
                updateScreen(lastNumStr);
                chosenFunction = functionBtnsList[i].textContent;
                return;
            } else {
                chosenFunction = functionBtnsList[i].textContent;
                lastNumStr = thisNumStr;
                thisNumStr = "";
                return;
            }
            //operate the else statement otherwise AND DON'T CHANGE THE DISPLAY IN THIS EXAMPLE
            

            
        })
    }
}

function initializeEqualsBtn() {
    const equalsBtn = document.querySelector(".equalsBtn");
    equalsBtn.addEventListener("click", (e) => {
        //check if both button values are filled in
        if (thisNumStr != "" && lastNumStr != "") {
            lastNumStr = operate(parseInt(lastNumStr), parseInt(thisNumStr), chosenFunction).toString();
            thisNumStr = "";
            updateScreen(lastNumStr);
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
    if (b == 0) {
        return "nope."
    }
    return a / b;
}

function operate (a,b, operator) {
    if (operator === "+") {
        return add(a,b);
    }
    if (operator === "-") {
        return subtract(a,b);
    }
    if (operator === "/") {
        return divide (a,b);
    }
    if (operator === "x") {
        return multiply(a,b);
    }
}