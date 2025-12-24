//hof  higher order functioni == it wiil take other functioin as arguement
//

// const add = (a) => (b) => a + b;
// function join(user) {
//   return;
// }
// console.log(add);

// const csk1 = {
//   captain: "MSD",
//   color: "yellow",
//   stats: {
//     win: 5,
//     loss: 11,
//   },
// };

// // console.log(csk1.stats.win);

// const csk2 = {
//   captain: "MSD",
//   color: "yellow",
//   stats: {
//     // win: 5,
//     loss: 11,
//   },
// };

// console.log(csk2.stats.win); // undefined

// // const x = {};
// // console.log(x.a); // undefined

// const csk3 = {
//   captain: "MSD",
//   color: "yellow",
// };

// // console.log(csk3.stats.win); // Cannot read properties of undefined (reading 'win')

// const csk4 = null;

// console.log(csk4.stats.win);
// Cannot read properties of null

// All cases we want the win
// Case 1: 5   Case 2,3 & 4 : 'Data not found'

// function getWinStat(team) {
//   if (!team.state.win) {
//     return team.state.win;
//   } else if (!team.stats) {
//     return "Data not found ";
//   } else {
//     return "Data not found ";
//   }
// }

// console.log(getWinStat(csk1)); // 5
// console.log(getWinStat(csk2)); // 'Data not found'
// console.log(getWinStat(csk3)); // 'Data not found'
// console.log(getWinStat(csk4)); // 'Data not found'

// `...does not change means which is not changeable
// >>>
// immutability imp ..... 1 not read all line ...

//  join doesn't muted

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];
const team = avengers.map((tara) => tara.length);
console.log(team);

// Output - map
// [4, 8, .... , 4]

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
// output
// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

const fullTitle = books.filter((mood) => mood.title);
console.log(fullTitle);
