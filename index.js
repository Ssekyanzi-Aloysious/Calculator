// -----------------------------------------------VARIABLES-----------------------------------
let num1;
let num2;
let operator;
let isNum1 = false;
let resetDisplay = false;
const logDisplay = document.querySelector("#logDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const fnBtns = document.querySelectorAll("#fbutton");
const btns = document.querySelectorAll("#button");
const operatorBtns = document.querySelectorAll("#operatorBtn");

// ---------------------------------------------BUTTON EVENTLISTENERS-------------------------
// ====BUTTONS====
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if(num1){
      resultDisplay.textContent = operate(operator,Number(resultDisplay.textContent), Number(btn.textContent));
      // resultDisplay.textContent = Number(resultDisplay.textContent) + Number(btn.textContent);
      return;
    }
    if (resultDisplay.textContent == "0" && btn.textContent == "0") {
      return;
    }
    if (resultDisplay.textContent == "0" && btn.textContent == ".") {
      resultDisplay.textContent = "0.";
      return;
    }
    if (resultDisplay.textContent == "0" && btn.textContent != "0") {
      resultDisplay.textContent = "";
    }
    if (
      btn.textContent == "." &&
      String(resultDisplay.textContent).includes(".")
    ) {
      return;
    }
    resultDisplay.textContent += btn.textContent;
  });
});
// ****BUTTONS*****

// ====FUNCTION BUTTONS====
fnBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (btn.textContent) {
      case "⬅":
        if (resultDisplay.textContent != "0") {
          let str = String(resultDisplay.textContent);
          resultDisplay.textContent = str.substring(0,str.length-1);
          if (resultDisplay.textContent == "") resultDisplay.textContent = "0";
        }
        break;

        case "CE":
        if (resultDisplay.textContent != "0") {
          let str = String(resultDisplay.textContent);
          resultDisplay.textContent = str.substring(0,str.length-1);
          if (resultDisplay.textContent == "") resultDisplay.textContent = "0";
        }
        break;

        case "C": /**RESET ALL */
        resultDisplay.textContent = "0";
        isNum1 = false;
        logDisplay.textContent = "0";
        num1 = undefined ;
        num2 = undefined ;
        break;

    }
  });
});
// ****FUNCTION BUTTONS*****

// =====OPERATOR BUTTONS====
operatorBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    operator = btn.textContent;
    num1 = resultDisplay.textContent;
    isNum1 = true;
    logDisplay.textContent = resultDisplay.textContent + ` ${operator} `;
    
  })
})
// *****OPERATOR BUTTONS****

// ------------------------------------------BASIC MATH FUNCTIONS--------------------------
function add(num1, num2) {
  return num1 + num2;
}
function subtruct(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// -------------------------------------------------OPERATE FUNCTION-------------------
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
  }
}
