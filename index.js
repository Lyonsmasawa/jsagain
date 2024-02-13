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
document.getElementById("btn").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("myName").innerHTML = "Hello " + username;
  console.log(typeof username);
};

console.log(typeof String(age));
console.log(typeof Number(age));
console.log(typeof Boolean(""));

console.log(Math.round(3.34));
console.log(Math.floor(3.34));
console.log(Math.ceil(3.34));
console.log(Math.pow(3, 4));
console.log(Math.sqrt(4));
console.log(Math.abs(4));
console.log(Math.max(4, 5, 6));
console.log(Math.min(4, 6));
console.log(Math.min(4, 6));
console.log(Math.floor(Math.random() * 6 + 1));

// string ,methods

let user = "Lyons Bro";
let phone = "07-089-573-80";

console.log(user.length);
console.log(user.charAt(0));
console.log(user.indexOf("L"));
console.log(user.lastIndexOf("o"));
console.log(user.trim().toLowerCase());
console.log(user.trim().toLowerCase());
console.log(phone.replaceAll("-", ""));
console.log(user.slice(6));
console.log(user.slice(0, 5));
console.log(user.slice(user.indexOf(" ") + 1));
console.log(user.slice(0, user.indexOf(" ")));

let grade = 1;

switch (grade) {
  case "A":
    console.log("you did great");
    break;

  default:
    console.log("not a grade");
    break;
}

while (age < 30) {
  console.log(age);
  age += 5;
}
do {
  console.log(age);
  age -= 5;
} while (age > 20);

for (let i = 0; i < 10; i++) {
  if ((i === 3)) {
    continue
  }
  if ((i === 6)) {
    break
  }
  console.log(i);
}
