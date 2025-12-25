// const student = {
//   name: "Abishek",
//   age: 20,
//   address: {
//     city: "Trichy",
//     state: "TN",
//   },
//   hobbies: ["cricket", "football", "carrom"],
// };

// Task 1.1 - Destructuring
// 1. name
// 2. city
// 3. second hobby - "football

// method 1
// const { name, address, hobbies } = student;
// const [, h2] = hobbies;
// const { city } = address;

// console.log(name);
// console.log(city);
// console.log(h2);

// method 2

// const student = {
//   name: "Abishek",
//   age: 20,
//   address: {
//     city: "Trichy",
//     state: "TN",
//   },
//   hobbies: ["cricket", "football", "carrom"],
// };

// const {
//   name,
//   address: { city },
//   hobbies: [, h2],
// } = student;

// console.log(name);
// console.log(city);
// console.log(h2);

// var a = 50;
// var b = 40;
// var c = a + b; // logic

// console.log(90);

const x = [null];

// Condition -> true/false
// 100 - truthy - if the value converts to true its truthy
// null - falsy - if the value converts to false its falsy
if (x) {
  console.log("Awesome");
} else {
  console.log("Super");
}
