// const movies = [
//   { id: 1, title: "Baahubali", genre: "Action" },
//   { id: 2, title: "Arjun Reddy", genre: "Drama" },
// ];

// const moreMovies = [
//   { id: 3, title: "Jersey", genre: "Sports" },
//   { id: 4, title: "Eega", genre: "Fantasy" },
// ];

// // Write a function that merges movie arrays with default handling
// const mergeMovies = (movies, moreMovies = []) => {
//   // Your code here
//   return [...movies, ...moreMovies];
// };

// console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
// // console.log(JSON.stringify(mergeMovies(movies)));
// const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
// const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
// const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

// // The (...movies) syntax gathers all arguments into an array called 'movies'
// const getTitles = (...movies) => {
//   // .map() creates a new array containing ONLY the titles
//   return movies.map((movie) => movie.title);
// };

// console.log(JSON.stringify(getTitles(movie1, movie2, movie3)));
// // Output: ["Baahubali","Arjun Reddy","Jersey"]

// console.log(JSON.stringify(getTitles(movie1, movie2)));
// // Output: ["Baahubali","Arjun Reddy"]

// const user1 = { name: "Alice", age: 25 };
// const user2 = { name: "Bob" };
// const user3 = null;

// // Create a function that safely gets a user's age
// const getUserAge = (user) => {
//   // Your code here - use optional chaining
//   return user.age;
// };

// console.log(getUserAge(user1));
// console.log(getUserAge(user2));
// console.log(getUserAge(user3));
const sample = "Hello World";

// Write a function to reverse a string using spread, reverse & join
const reverseString = (str) => {
  // Your code here
  return str.split("").reverse().join("");
};

console.log(reverseString(sample));

const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  // Your code here
  return movies.reduce((acc, movie) => {
    // Spread the old items and the new ratings into a new array
    return [...acc, ...movie.ratings];
  }, []);
};

console.log(JSON.stringify(getAllRatings(movies)));
