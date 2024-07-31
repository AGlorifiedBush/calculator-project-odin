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
        parseInt(num1);
        parseInt(num2);

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
    num1 = numX;
    console.log(num1);
    total = num1;
    updateDisplay();
   } else if(operator === "" || operator === null){
    num1 += numX;
    console.log(num1);
    total = num1;
    updateDisplay();
   } if (operator != "") {
    num2 += numX;
    console.log(num2);
    total = num2;
    updateDisplay();
   };
};
    
function setOperator(op){
    operator += op
    console.log(operator)
    total = operator;
    numX = "";
    updateDisplay();
};


function add(a, b) {
    total = parseInt(a) + parseInt(b);
    updateDisplay();
    num1 = total
    operator = "";
    num2 = "";
    return
};


function subtract(a, b) {
    total = a - b;
    updateDisplay();
    num1 = total
    operator = "";
    num2 = "";
    return
};


function multiply(a, b) {
    total = a * b;
    updateDisplay();
    num1 = total
    operator = "";
    num2 = "";
    return
};


function divide(a, b) {
    if (a === "0" || b === "0"){
        total = "OH NO!!!!!!!"
        updateDisplay();
        return
    } else {
        total = a / b;
        updateDisplay();
        num1 = total
        operator = "";
        num2 = "";
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
        divide(num1, num2)
    } else if (operator.length > 1) {
        total = "ERROR";
        updateDisplay();
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