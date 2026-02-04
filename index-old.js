const buttons = document.querySelectorAll(".btn");
const operatorBtns = document.querySelectorAll("#operatorBtn");
let num1, num2, operator, result;
let resultDisplay = document.querySelector("#resultDisplay");
let logDisplay = document.querySelector("#logDisplay");
let calculateBtn = document.querySelector("#calculateBtn");

// BUTTON EVENT LISTENERS--------------------
buttons.forEach((button) => {
  /**START */
  button.addEventListener("click", (e) => {
    // LOG DISPLAY
    if (logDisplay.textContent == "0") {
      logDisplay.textContent = "";
    }

    if (button.textContent == "CE") {
      logDisplay.textContent = "0";
      resultDisplay.textContent = "0";
      resultDisplay.style.fontSize = "60px";
      resultDisplay.style.padding = ".1rem 1rem";
      return;
    }
    if (button.textContent == "C") {
      logDisplay.textContent = "0";
      resultDisplay.textContent = "0";
      resultDisplay.style.fontSize = "60px";
      resultDisplay.style.padding = ".1rem 1rem";
      return;
    }
    if (button.textContent == "⬅") {
      logDisplay.textContent = logDisplay.textContent.slice(0, -1);
      if (logDisplay.textContent == "") logDisplay.textContent = 0;
      return;
    }
    logDisplay.textContent += button.textContent;
  });

  /**END */
});

// OPERATOR BUTTONS EVENT LISTENERS---------------

operatorBtns.forEach((button) => {
  // if operator is already initialised...calculate the expression before
  if (operator != "") {
    result = operate(operator, num1, num2);
    resultDisplay.textContent = result;
    num1 = result;
    result = "";
  }
  button.addEventListener("click", (e) => {
    // if(num1 && num2){
    //   console.log("ALREADY");
    // }
 
    /**START */
    if (logDisplay.textContent == "") {
      num1 = 0;
    }
    // num1 = Number(logDisplay.textContent);

    operator = button.textContent;

    logDisplay.textContent += ` ${operator} `;

    switch (operator) {
      case "+":
        {
        }
        break;
      case "-":
        {
        }
        break;
      case "*":
        {
        }
        break;
      case "/":
        {
        }
        break;
      case "=":
        {
          let index = String(logDisplay.textContent).indexOf(operator);
          
          console.log(index);
        }
        break;

      default:
        break;
    }

    /**END */
  });
});

calculateBtn.addEventListener("click", (e) => {
  let index = String(logDisplay.textContent).indexOf(operator);

  num1 = Number(logDisplay.textContent.substring(0, index - 1));
  num2 = Number(logDisplay.textContent.substring(index + 1));
  result = operate(operator, num1, num2);

  if (String(result).length > 9) {
    resultDisplay.style.fontSize = "30px";
    resultDisplay.style.padding = "1.5rem 0rem";
  }

  //   if(!(Number.isInteger(result))) result = result.toFixed(5);
  resultDisplay.textContent = result;
  console.log(`num1: ${num1}    num2: ${num2}`);
  console.log(result);
  logDisplay.textContent = "";
});

// ***==========================ADD FUNCTION==========================***
function add(num1, num2) {
  return num1 + num2;
}

// ***==========================SUBTRUCT FUNCTION==========================***
function subtruct(num1, num2) {
  return num1 - num2;
}

// ***==========================MULTIPLY FUNCTION==========================***
function multiply(num1, num2) {
  return num1 * num2;
}

// ***==========================DIVIDE FUNCTION==========================***
function divide(num1, num2) {
    if(num2 == 0){
        return  "Cannot divide by 0";
    }
  return num1 / num2;
}

// ***==========================OPERATE FUNCTION==========================***
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtruct(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      return logDisplay.textContent;
  }
}
