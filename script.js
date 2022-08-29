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