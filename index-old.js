const buttons = document.querySelectorAll(".btn");
let num1, num2, operator;
let resultDisplay = document.querySelector("#resultDisplay");
let logDisplay = document.querySelector("#logDisplay");

// --------------------add event listeners
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (resultDisplay.textContent == "0") {
      resultDisplay.textContent = "";
      logDisplay.textContent = "";
    }
    if (button.textContent == "CE") {
      resultDisplay.textContent = "0";
      logDisplay.textContent = "0";
      return;
    }
    if (button.textContent == "C") {
      resultDisplay.textContent = "0";
      logDisplay.textContent = "0";
      return;
    }
    if (button.textContent == "⬅") {
      resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
      logDisplay.textContent = logDisplay.textContent.slice(0, -1);
      if (resultDisplay.textContent == "") resultDisplay.textContent = "0";
      return;
    }
    resultDisplay.textContent += button.textContent;
    logDisplay.textContent += button.textContent;

    // OPERATOR LISTENERS
    switch (button.textContent) {
      case "+":
        {
          operator = "+";
          let index = String(resultDisplay).indexOf(operator);
          num1 = Number(resultDisplay.textContent.slice(0, index));
          // logDisplay.textContent += operator;
          console.log(num1);
        }
        break;

      // case "-":
      //   {
      //     num1 = Number(resultDisplay.textContent.slice(0, -1));
      //     operator = "-";
      //   }
      //   break;
      // case "*":
      //   {
      //     num1 = Number(resultDisplay.textContent.slice(0, -1));
      //     operator = "*";
      //   }
      //   break;
      // case "/":
      //   {
      //     num1 = Number(resultDisplay.textContent.slice(0, -1));
      //     operator = "/";
      //   }
      //   break;
      // case "=":
      //   {
      //     num2 = Number(resultDisplay.textContent.slice(String(num1).length, -1));
      //   }
      //   break;
    }
  });
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
  return num1 / num2;
}

// ***==========================OPERATE FUNCTION==========================***
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(subtruct(num1, num2));
      break;
    case "*":
      console.log(multiply(num1, num2));
      break;
    case "/":
      console.log(divide(num1, num2));
      break;
    default:
      console.log("OPERATOR NOT DEFINED!");
  }
}
