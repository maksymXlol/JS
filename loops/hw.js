//Loops: while and for

//task one

let i = 3;
alert(i--); // shows 3, now i = 2
alert(i--); // shows 2, now i = 1
alert(i--); // shows 1, now i = 0
//done, check stops operation

//task two

let c = 0;
while (++i < 5) alert(i); //last number it will show it is 4

let a = 0;
while (i++ < 5) alert(i); // but there last number will be 5
//Summary:it will show diferent answers at the end

//task three

for (let i = 0; i < 5; i++) alert(i);

for (let i = 0; i < 5; ++i) alert(i);
//Summary:The value returned by the increment is not used here, so there’s no difference
//between i++ and ++i.

//task four
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// task five

let b = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

//task six

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//task seven

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}
