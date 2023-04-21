let first_number = "";
let second_number = "";
let operation = "";
let answer = "";

const current_view = document.querySelector(".calculator-input-view");
const answer_view = document.querySelector(".calculator-output-view");
const equals_button = document.querySelector(".equals-button");
const clear_button = document.querySelector(".clear-button");
const delete_button = document.querySelector(".delete-button");

const number_buttons = document.querySelectorAll(".number");
const opperand_button = document.querySelectorAll(".opperand");

//  On number click
number_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (operation == "") {
      if (buttonValue == "." && first_number.includes(".")) {
        return;
      }
      first_number += buttonValue;
    } else {
      if (buttonValue == "." && second_number.includes(".")) {
        return;
      }
      second_number += buttonValue;
    }
    current_view.textContent = first_number + operation + second_number;
  });
});

// On operation click
opperand_button.forEach((button) => {
  button.addEventListener("click", () => {
    const opperand_button = button.textContent;
    operation = opperand_button;
    current_view.textContent = first_number + operation + second_number;
    answer_view.textContent = "";
  });
});

// On equals click
equals_button.addEventListener("click", () => {
  answer = calculate(first_number, second_number, operation);
  answer_view.textContent = answer;
  first_number = answer.toString();
  second_number = "";
});

// On clear click

clear_button.addEventListener("click", () => {
  first_number = "";
  second_number = "";
  operation = "";
  current_view.textContent = first_number + operation + second_number;
  answer_view.textContent = "";
});

// On delete click
delete_button.addEventListener("click", () => {
  if (operation == "") {
    if (first_number == "") {
      return;
    }
    first_number = first_number.slice(0, -1);
  } else {
    if (second_number == "") {
      operation = "";
    } else {
      second_number = second_number.slice(0, -1);
    }
  }
  answer_view.textContent = "";
  current_view.textContent = first_number + operation + second_number;
});

const calculate = (number1, number2, operation) => {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  if (operation == "/") {
    answer = number1 / number2;
  } else if (operation == "*") {
    answer = number1 * number2;
  } else if (operation == "-") {
    answer = number1 - number2;
  } else if (operation == "+") {
    answer = number1 + number2;
  }
  console.log(number1, operation, number2, answer);
  return answer;
};
