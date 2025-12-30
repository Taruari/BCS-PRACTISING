// const fruits = ["🍎", "🍊", "🍌", "🍇", "🍓", "🥝"];

// //
// let index = 0;

// while (index < fruits.length) {
//   console.log(fruits[index]);
//   index++;
// // }
// const fruits1 = ["🍎", "🍊", "🍌", "🍇", "🍓", "🥝"];

// // Better
// for (let fruit of fruits1) {
//   console.log(fruit);
// }

// const balance = 1000;
// const result = balance || "Invalid Balance";
// console.log(result);
// const balance = 2000;
// const result = balance ?? "Invalid Balance";

// console.log(result);
// const x = 10;

// // 1000 lines
// // console.log(x);
// const fruits = ["🍎", "🍊", "🍓", "🍍"];
// // console.log(fruits.join("🍽️"));
// console.log(fruits.slice(0, 3));

// let greet = function (name) {
//   let message = "Hello, " + name; // 'message' is local to this function
//   return message;
// };

// console.log(greet("name"));
// function myFunc(theArr) {}

// const arr = [45];

// console.log(arr[0]); // 45

// console.log(arr[0]); // 45
// const square = function (number) {
//   return number * number;
// };

// console.log(square(4)); // 16

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60
