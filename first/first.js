// alert("welcome")
// prompt("What is your name?")
// confirm("Did you see my another website?")
// console.log("something")

let myName = "Max";
let age = 11;
let birthYear = 2022 - age;
let isPupil = true;
age = 12;

let x = 54;
let y = 17;
let z = x / 27 + y * 2;
let o = x % 5;
let p = 2 ** 5;
x += y; // x = x + y

age = age + 1; // age += 1, *=, /=, -=

const pi = 3.14;
// pi = 15; // error : you can't change const

console.log(pi);
console.log(x);
console.log(--age);
console.log(age);

let car = {
  model: "BMW",
  year: 2019,
  color: "red",
  passenger: {
    name: "John",
    age: 21,
  },
};

console.log(car.color); //red

car.color = "black";

car.engine = 100;
