// const avengers = [
//   "Hulk",
//   "Iron man",
//   "Black widow",
//   "Captain america",
//   "Spider man",
//   "Thor",
// ];

// for (let i = 0; i < avengers.length; i++) {
//   console.log(`${avengers[i]} contain ${avengers[i].length} letters`);
// }
// for of method
// for (let avenger of avengers) {
//   console.log(`${avenger} contain ${avenger.length} letters`);
// }

// const books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];

// // // Clue: Array method - push()
// // function getTitles(books) {

// // }
// // console.log(getTitles(books));

// // ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

// //["Infinite Jest",  "The Catcher in the Rye"]

// function getTitles(books) {
//   for (let book of books) {
//   }
//   console.log(getTitles(books));
// }

function sayHello() {
  return function () {
    console.log("Hello, 🥰 ");
  };
}
console.log(sayHello);
// function  treated as a value then they first class citizen

// outer part callled as lexical scope
