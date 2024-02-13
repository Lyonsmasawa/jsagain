// intro
console.log(`this`);
document.getElementById("myh1").textContent = "try";

// variables
let x; //declaration
x = 123; //assignment

// Numbers dt
let age = 25;
let price = 10.99;

// string dt
let name = "Lyons 123";

// boolean dt
let b = true;

//

console.log(typeof age, typeof name, typeof b);
// number string boolean
document.getElementById("myData").textContent = `${
  typeof age + " " + typeof name + " " + typeof b
}`;

// ARITHMETIC OPEARTORS
let students = 30;
document.getElementById("myArithmeticOperations").textContent = `${
  students ** 2 + " " + students + 1 + " " + (students % 3)
}`;

console.log((students += 3));
students++;
console.log(students);

let username;
document.getElementById("myLabel")
console.log(username)