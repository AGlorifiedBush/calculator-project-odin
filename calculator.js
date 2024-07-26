let operator = "";
let num1 = "";
let num2 = "";

const numberButton = document.querySelectorAll(".num");
const opButton = document.querySelectorAll(".op");
const clrButton = document.getElementById("clear")
const eqlButton = document.getElementById("equals")

function loadPage(){
    numberButton.forEach(btn =>{
        btn.addEventListener("click", (e) =>{
            setOperand(e.target.innerHTML);
        }) 
    })

    opButton.forEach(btn =>{
        btn.addEventListener("click", (e) =>{
            setOperator(e.target.innerHTML);
        })
    })

    clrButton.addEventListener("click", () =>{
        clear()
    })

    eqlButton.addEventListener("click", () => {
        if (operator === "" && num1 === "" && num2 === ""){
            total = "ERROR"
            updateDisplay()
        } else{
            operate(operator, num1, num2)
        }
        
    })
    total = 0;
    updateDisplay();
}


function setOperand(numX){
   if (num1 === "" || num1 === null) {
    num1 = parseInt(numX);
    console.log(num1);
    total = num1;
    updateDisplay();
   } else if (num2 === "" || num2 === null && operator != "") {
    num2 = parseInt(numX);
    console.log(num2);
    total = num2;
    updateDisplay();
   };
};
    
function setOperator(op){
    operator = op
    console.log(operator)
    total = operator;
    updateDisplay();
};


function add(a, b) {
    total = a + b;
    updateDisplay();
    return
};


function subtract(a, b) {
    total = a - b;
    updateDisplay();
    return
};


function multiply(a, b) {
    total = a * b;
    updateDisplay();
    return
};


function divide(a, b) {
    if (num1 === 0 || num2 === 0){
        total = "OH NO!!!!!!!"
        updateDisplay();
        return
    } else {
        total = a / b;
        updateDisplay();
        return
    } 
};


function operate (operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "/") {
        divide(num1. num2)
    }
};

function updateDisplay() {
    const display= document.getElementById("display");
    display.textContent= total;
};

function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    total = 0;
    updateDisplay();
    return
};

loadPage()