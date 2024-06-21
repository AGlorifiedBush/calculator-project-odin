let numberA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let operator = ["=", "-", "*", "/"]
let numberB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



function add(a, b) {
    return a + b;
}
console.log(add(2, 3))

function subtract(a, b) {
    return a - b;
}
console.log(subtract(6, 2))

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 4))

function divide(a, b) {
    return a / b;
}
console.log(divide(6, 3))

function operate (operator, numberA, numberB) {
    if (operator === "+") {
        add(numberA, numberB);
    } else if (operator === "-") {
        subtract(numberA, numberB);
    } else if (operator === "*") {
        multiply(numberA, numberB);
    } else if (operator === "/") {
        divide(numberA. numberB)
    }
}