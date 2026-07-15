let firstNumber = 5
let operator = "/"
let secondNumber = 7 

const operate = function(operator, firstNumber,secondNumber){
    if (operator == "+") {
        return add(firstNumber,secondNumber)
    }
        else if (operator == "-") {
        return subtract(firstNumber,secondNumber)
    }
        else if (operator == "*") {
        return multiply(firstNumber,secondNumber)
    }
        else if (operator == "/") {
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
    return a / b 
}

console.log (operate(operator,firstNumber,secondNumber))