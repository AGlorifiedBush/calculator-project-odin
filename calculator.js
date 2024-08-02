let operator = "";
let num1 = "";
let num2 = "";

const numberButton = document.querySelectorAll(".num");
const opButton = document.querySelectorAll(".op");
const clrButton = document.getElementById("clear");
const eqlButton = document.getElementById("equals");
const backButton = document.getElementById("back");
const decimalButton = document.getElementById("decimal")
const display= document.getElementById("display");

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
    
    backButton.addEventListener("click", () =>{
        backspace()
    })

    decimalButton.addEventListener("click", (e)=>{
        decimal(e.target.innerHTML)

        if (num1.includes(".") && operator === "") {
            decimalButton.setAttribute("disabled", "")
        } else if (num2.includes(".")) {
            decimalButton.setAttribute("disabled", "")
        }
    })

    eqlButton.addEventListener("click", () => {
        parseFloat(num1);
        parseFloat(num2);
        decimalButton.removeAttribute("disabled")
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
    decimalButton.removeAttribute("disabled");
    updateDisplay();
};

function decimal(dec){
    if (operator === "" || operator === null) {
        num1 += dec;
        total += dec;
        updateDisplay()
    } else {
        num2 += dec;
        total += dec;
        updateDisplay()
    }
    
}

function add(a, b) {
    total = parseFloat(a) + parseFloat(b);
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
        tot = a / b;
        parseFloat(tot);
        total = tot.toFixed(2);
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
    if (isNaN(total)){
        display.textContent= total;
    } else {
        total = total*100;
        total = Math.round(total);
        total = total/100;
        display.textContent= total;
    }
    
};

function backspace() {
    if(operator === "" || operator === null) {
        num1 = num1.toString().slice(0, -1);
        total = total.toString().slice(0, -1);
        updateDisplay();
    } else if(operator != "" || operator === null) {
        num2 = num2.toString().slice(0, -1);
         total = total.toString().slice(0, -1);
        updateDisplay();
    }
}

function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    total = 0;
    decimalButton.removeAttribute("disabled")
    updateDisplay();
    return
};

loadPage()