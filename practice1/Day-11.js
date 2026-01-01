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
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// const users = [
//   { id: 1, name: "Arjun", email: "arjun@example.com" },
//   { id: 2, name: "Sneha", email: "sneha@example.com" },
//   { id: 3, name: "Vijay", email: "vijay@example.com" },
// ];

// // We only want the names for a contact list
// const userNames = users.map((user) => user.name);

// console.log(userNames);
// // // Output: ["Arjun", "Sneha", "Vijay"]
// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
// ];

// // Write a function that formats movie titles with their ratings
// const getTitlesAndRatings = (movies) => {
//   // Your code here
//   return movies
//     .map((movie) => `${movie.title}: ${movie.ratings.join(", ")}`) // Format each movie
//     .join(" | "); // Glue all movies together into one string
// };

// console.log(getTitlesAndRatings(movies));
const students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Charlie", marks: 94 },
  { name: "Thomas", marks: 68 },
];

// Use the reduce method to find the student object with the highest marks
const topper = students.reduce((accumulator, currentStudent) => {
  // Check if the current student's marks are greater than the accumulator's marks
  if (currentStudent.marks > accumulator.marks) {
    return currentStudent; // If so, the current student becomes the new accumulator
  } else {
    return accumulator; // Otherwise, keep the current accumulator
  }
}, students[0]); // Start with the first student as the initial accumulator

console.log(`${topper.name} is the topper with ${topper.marks} marks.`);
// Output: Ishitha is the topper with 95 marks.
