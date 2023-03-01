// console.log(2 > 4);
// console.log(1 <= 1);
// console.log("05" == 5);
// console.log("8" === 8);
// console.log(6 != "8");
// console.log(6 !== 6);
// console.log(!false);

// console.log("a" > "A");

// let year = 2023;

// if (!year < 2000) {
//   console.log("yyyeeeeaaa!!!!");
// } else {
//   console.log("nooooooooooo!!!");
// }

// let number = 15;
// let randNumber = Math.trunc(Math.random() * 21);

// if (number === randNumber) {
//   alert("good job!");
// } else if (number > randNumber) {
//   alert("too small");
// } else if (number < randNumber) {
//   alert("too big");
// }
// console.log(randNumber);

let a = 5;
let b = -4;

// logical AND
if (a > 2 && b < 4 && true) {
  console.log("AND");
}

//logical OR
if (a > 2 || b < 4 || true) {
  console.log("OR");
}

if (" " && true) {
  console.log("yes");
}

let c = 12 && " " && undefined && true;
let d = false || "" || 11;
console.log(c, d);
