//globals
let chosenFunction = "";

let thisNumStr = "";
let lastNumStr = "";

initializeNumBtns();
initializeClearBtn();
initializeFunctionBtns();
initializeEqualsBtn();

//note--doesn't work after I press equals and then a function(need to go through scenarios and write more if statements under the functions and equals buttons) 
//after hitting the equals sign I can type in another number and then hit it again and just does the previous operation i had chosen, which is a little confusing
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
            if (thisNumStr.length > 20) {
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
                console.log("CHOSE OPTION 1: THE VALUES ARE- thisNumStr" +thisNumStr + " AND lastNumStr " + lastNumStr)
                lastNumStr = operate(parseInt(lastNumStr), parseInt(thisNumStr), chosenFunction).toString();
                thisNumStr = "";
                updateScreen(lastNumStr);
                chosenFunction = functionBtnsList[i].textContent;
                return;
            } else if (thisNumStr=="" && lastNumStr!="") {
                console.log("ABANDONED")
                return;
            } else
            {
                console.log("CHOSE OPTION 2: THE VALUES ARE- thisNumStr" + thisNumStr + " AND lastNumStr " + lastNumStr)
                chosenFunction = functionBtnsList[i].textContent;
                lastNumStr = thisNumStr;
                thisNumStr = "";
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