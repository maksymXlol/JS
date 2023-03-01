// 28.02.23

//number 1
if ("0") {
  alert("Привіт"); //true, alert will work
}

//number 2
let value1 = prompt("What's the “official” name of JavaScript?");

//number 3
if (value1 === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? “ECMAScript”!");
}

//number 4
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

//number 5
let result = a + b < 4 ? "Below" : "Over";

//number 6
let value = prompt("Type a number", 0);

if (value > 0) {
  alert("1");
} else if (value < 0) {
  alert("-1");
} else {
  alert("0");
}
