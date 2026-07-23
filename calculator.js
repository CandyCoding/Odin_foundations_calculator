let firstNumber = 0 
let operator = ""
let secondNumber = 0 
let display = document.getElementById("display")
let numberBtns = document.querySelectorAll(".number")
let operatorBtns = document.querySelectorAll(".operator")
let current = ""

numberBtns.forEach((button,index) => {
    button.addEventListener("click", () => {
    if (button.dataset.value === "." && current.includes(".")) {
            return
        }
        current += button.dataset.value
        display.textContent = current
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (current === "") {
            // caso: doble operador, no hay número nuevo
            operator = button.dataset.operator
            return
        }
        if (operator !== "") {
            // caso: hay una operación pendiente, resuélvela primero
            secondNumber = Number(current)
            firstNumber = operate(operator, firstNumber, secondNumber)
            display.textContent = firstNumber
        } else {
            // caso: primer operador que se pulsa
            firstNumber = Number(current)
        }
        operator = button.dataset.operator
        current = ""
    })
})

 let equalBtn = document.getElementById("result")
 equalBtn.addEventListener("click", () => {
     if (operator === "" || current === ""){   
    }
    else{
   secondNumber = Number(current)
   //console.log(secondNumber)
    let rawResult = operate(operator, firstNumber, secondNumber)
    let result = typeof rawResult === "number" ? Math.round(rawResult * 10000) / 10000 : rawResult
   display.textContent = result
   firstNumber = result
   operator =""
   current = ""
    }
 })
let backspaceBtn = document.getElementById("backspace")
backspaceBtn.addEventListener("click", () => {
    current = current.slice(0, -1)
    display.textContent = current === "" ? "0" : current
})
 let clearBtn = document.getElementById("clear")
 clearBtn.addEventListener("click",() =>{
    firstNumber = 0 
    operator = ""
    secondNumber = 0 
    current = ""
    display.textContent = 0
})


document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        document.querySelector(`.number[data-value="${e.key}"]`).click()
    }else if (e.key === "." || e.code === "NumpadDecimal") {
    document.querySelector('.number[data-value="."]').click()
    } 
    else if (["+", "-", "*", "/"].includes(e.key)) {
        document.querySelector(`.operator[data-operator="${e.key}"]`).click()
    } else if (e.key === "Enter" || e.key === "=") {
        equalBtn.click()
    } else if (e.key === "Backspace") {
        backspaceBtn.click()
    } else if (e.key === "Escape") {
        clearBtn.click()
    }
})

const operate = function(operator, firstNumber,secondNumber){
    if (operator === "+") {
        return add(firstNumber,secondNumber)
    }
        else if (operator === "-") {
        return subtract(firstNumber,secondNumber)
    }
        else if (operator === "*") {
        return multiply(firstNumber,secondNumber)
    }
        else if (operator ==="/") {
        return divide(firstNumber,secondNumber)
    }
}

function add(a, b) { 
  return a + b
}
function subtract(a, b) {
    return a - b

}
function multiply(a, b) { 
    return a * b
}
function divide(a, b) { 
    if (b == 0 ){
    return "ERROR"
    }else
    return a / b
}
