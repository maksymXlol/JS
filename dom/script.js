// DOM - Document Object Model
console.log(document);
document.body.style.backgroundColor = "red";
document.body.style.color = "white";

let par = document.getElementById("paragraph");

let header = document.querySelector("#paragraph");

let li = document.querySelectorAll("ul li");
console.dir(li);

let btn = document.querySelector(".btn");

// btn.addEventListener("click", clickBtn);

// function clickBtn() {
//   let R = Math.floor(Math.random() * 256);
//   let G = Math.floor(Math.random() * 256);
//   let B = Math.floor(Math.random() * 256);
//   document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
// }

btn.addEventListener("click", () => {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
});
