const display = document.getElementById("display");
const history = document.getElementById("history");

let current = "0";
let previous = null;
let operator = null;
let justEvaluated = false;

function updateDisplay() {
  display.textContent = current;
  history.textContent =
    previous !== null && operator !== null
      ? `${previous} ${operatorSymbol(operator)}`
      : "";
}

function operatorSymbol(op) {
  if (op === "*") return "×";
  if (op === "/") return "÷";
  return op;
}

function inputNumber(num) {
  if (justEvaluated) {
    current = num;
    justEvaluated = false;
    updateDisplay();
    return;
  }

  if (current === "0") current = num;
  else current += num;

  updateDisplay();
}

function inputDot() {
  if (justEvaluated) {
    current = "0.";
    justEvaluated = false;
    updateDisplay();
    return;
  }
  if (!current.includes(".")) {
    current += ".";
    updateDisplay();
  }
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  justEvaluated = false;
  updateDisplay();
}

function deleteOne() {
  if (justEvaluated) return;
  if (current.length === 1) current = "0";
  else current = current.slice(0, -1);
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null && previous !== null && !justEvaluated) {
    evaluate();
  }

  previous = parseFloat(current);
  operator = op;
  justEvaluated = false;
  current = "0";
  updateDisplay();
}

function evaluate() {
  if (operator === null || previous === null) return;

  const currNum = parseFloat(current);
  let result;

  switch (operator) {
    case "+": result = previous + currNum; break;
    case "-": result = previous - currNum; break;
    case "*": result = previous * currNum; break;
    case "/":
      if (currNum === 0) {
        current = "Error";
        previous = null;
        operator = null;
        justEvaluated = true;
        updateDisplay();
        return;
      }
      result = previous / currNum;
      break;
  }

  
  current = Number.isInteger(result) ? String(result) : String(+result.toFixed(10));
  previous = null;
  operator = null;
  justEvaluated = true;
  updateDisplay();
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const num = btn.dataset.num;
  const op = btn.dataset.op;
  const action = btn.dataset.action;

  if (num) return inputNumber(num);
  if (op) return setOperator(op);

  if (action === "dot") return inputDot();
  if (action === "clear") return clearAll();
  if (action === "delete") return deleteOne();
  if (action === "equals") return evaluate();
});

updateDisplay();
