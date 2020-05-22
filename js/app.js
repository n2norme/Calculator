const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

const calculate = (n1, operator, n2) => {
    let result = "";
    if(operator === "add"){
        result = parseFloat(n1) + parseFloat(n2);
    }else if (operator === "subtract"){
        result = parseFloat(n1) - parseFloat(n2);
    }else if (operator === "multiply"){
        result = parseFloat(n1) * parseFloat(n2);
    }else if (operator === "divide"){
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const displayedNum = display.innerText;
        const previousKeyType = calculator.dataset.previousKeyType;
        if(!action){
            if(displayedNum === "0" || previousKeyType === "operator"){
                display.innerText = keyContent;
            }else{
                display.innerText = displayedNum + keyContent;
            }
        calculator.dataset.previousKey = "number";    
        }
        if(
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            key.classList.add("is-depressed");
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.firstValue;
            if(firstValue && operator){
                display.innerText = calculate(firstValue,operator,secondValue);
            }
        }
        if(action === "decimal"){
            if(!displayedNum.includes(".")){
                display.innerText = displayedNum + ".";
            }else if (previousKeyType === "operator"){
                display.innerText = "0";
            }
        calculator.dataset.previousKey = "decimal";  
        }
        if(action === "clear"){
            calculator.dataset.previousKey = "clear"; 
            //display.innerText = 
            
        }
        if(action === "calculate"){
            const secondValue = displayedNum;
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;

            display.textContent = calculate(firstValue,operator,secondValue);
            calculator.dataset.previousKey = "calculate";  
        }
        Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"));
    }
   })