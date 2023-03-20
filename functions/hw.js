//functions

//Task one:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
// There are no diference

// Task two
// Using ?
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
// Using ||
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
//(I didn't learn the last one)

// Arrow functions, the basics
//  Task one
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
