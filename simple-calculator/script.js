"use strict";

// const sum = document.querySelector(".number");
// const btnPlus = document.querySelector(".btnPlus");
// const btnMinus = document.querySelector(".btnMinus");
// // sum.value
// btnPlus.addEventListener("click", clickBtnPlus);

// let num = 0;

// function clickBtnPlus() {
//   sum.value = ++num;
// }

// btnMinus.addEventListener("click", clickBtnMinus);

// function clickBtnMinus() {
//   sum.value = --num;
// }

const number_1 = document.querySelector(".number-1");
const number_2 = document.querySelector(".number-2");
const operation = document.querySelector(".operation");
const btn = document.querySelector(".cal");

btn.addEventListener("click", clickbtn);

function clickbtn() {
  let a = +number_1.value;
  let b = +number_2.value;
  let sign = operation.value;
  let result = calculate(a, b, sign);
  alert(`a + b = ${result}`);

  number_1.value = "";
  number_2.value = "";
}

function calculate(a, b, sign) {
  let result = 0;
  if (sign == "+") {
    result = a + b;
  } else if (sign == "-") {
    result = a - b;
  } else if (sign == "x") {
    alert(a * b);
  } else if (sign == "/") {
    alert(a / b);
  }
  return result;
}
