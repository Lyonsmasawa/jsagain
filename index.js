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
  if (i === 3) {
    continue;
  }
  if (i === 6) {
    break;
  }
  console.log(i);
}
console.log(
  (1234.56).toLocaleString("de-DE", { style: "currency", currency: "EUR" })
);
console.log(
  (1234.56).toLocaleString(undefined, { style: "unit", unit: "celsius" })
);
console.log((1234.56).toLocaleString(undefined, { style: "percent" }));

// arrays
let fruit = ["apple", "orange", "banana", "mango"];

console.log(fruit[2]);
fruit.push("lemon"); //add an elemtn
fruit.pop(); //add an elemtn
fruit.unshift("lemon");
fruit.shift();

console.log(fruit);
console.log(fruit.length);
console.log(fruit.indexOf("mango"));
console.log(fruit.includes("mango"));

let prices = [1, 2];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

for (let price of prices) {
  console.log(price);
}

let fruits = fruit.sort().reverse();
console.log(fruits);

let one_arr = [1, 2, 3, 4, 5, 6];
let two_arr = [11, 12, 13, 14, 15, 16];
let three_arr = [21, 22, 23, 24, 25, 26];

let all_arr = [one_arr, two_arr, three_arr];
console.log(all_arr[0][1]);
all_arr[2][[5]] = 38;
for (let list of all_arr) {
  for (let number of list) {
    console.log(number);
  }
}

let spread_arr = [21, 22, 23, 24, 25, 26];

console.log(Math.max(...spread_arr));
one_arr.push(...three_arr);
console.log(one_arr);

// array.forEach() - executes a provided callback function for each element once for each array element
let inhabits = ["spongebob", "partrick", "squidward", "mr.krabs"];
inhabits.forEach(capitalize);
inhabits.forEach(print);
// for each method behind the scenes provides us with upto 3 arguments automatically - element, index and array
function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
  console.log(element);
}

// array.map() -  executes a provided callback function once for each array element and creates a new array
let nx = [1, 2, 3, 4, 5];
let squares = nx.map(square);
squares.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function print(element) {
  console.log(element);
}

// filter() - creates a new array with all elements that pass the test provided by an function
console.log("-------filter-------");
let ages = [12, 13, 38, 46, 58];
let adults = ages.filter((age) => age > 18);
adults.forEach(print);

// reduce() - reduces an array to a single value
console.log("-------reduce-------");
let pricess = [12, 122, 144, 567];
let total = pricess.reduce((total, price) => total + price, 0);
console.log(`the total is ${total}`);

function print(element) {
  console.log(element);
}

// sort an array of numbers
let grdes = [90, 56, 98, 70, 70];
console.log(...grdes.sort().reverse());
// or
console.log(grdes.sort((x, y) => x - y));
console.log(grdes.sort((x, y) => y - x));

class Player {
  score = 0;

  pause() {
    console.log("You paused");
  }

  exit() {
    console.log("You existed");
  }
}

const player1 = new Player();
const player2 = new Player();
player1.score++;

console.log(player1.score, player2.score);

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  study() {
    console.log("study");
  }
}

let student1 = new Student("qw", 23, 78);
console.log(student1);
student1.study();

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let personArr = Object.entries(person);
for (let i of personArr) {
  console.log(i);
}
console.log(Object.keys(person));
console.log(Object.values(person));
// constructor 	Returns the function that created an object's prototype
// keys() 	Returns an Array Iterator object with the keys of an object
// prototype 	Let you to add properties and methods to JavaScript objects
// toString() 	Converts an object to a string and returns the result
// valueOf() 	Returns the primitive value of an object