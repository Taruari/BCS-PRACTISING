// const movies = [
//   { id: 1, title: "Baahubali", genre: "Action" },

//   { id: 2, title: "Arjun Reddy", genre: "Drama" },

//   { id: 3, title: "Mahanati", genre: "Biography" },

//   { id: 4, title: "Eega", genre: "Fantasy" },

//   { id: 5, title: "Jersey", genre: "Sports" },
// ];

// const getMovieTitlesByIds = (movies, ...ids) => {
//   // 1. Filter the array to keep only movies whose ID is in the 'ids' array
//   // 2. Map the resulting objects to get just the 'title' property
//   return movies
//     .filter((movie) => ids.includes(movie.id))
//     .map((movie) => movie.title);
// };

// console.log(getMovieTitlesByIds(movies, 1, 3, 5));
// // Output: ["Baahubali", "Mahanati", "Jersey"]

// console.log(getMovieTitlesByIds(movies, 1, 6));
// // Output: ["Baahubali"] (ID 6 does not exist)

const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },

  { id: 2, title: "Arjun Reddy", genre: "Drama" },

  { id: 3, title: "Mahanati", genre: "Biography" },

  { id: 4, title: "Eega", genre: "Fantasy" },

  { id: 5, title: "Jersey", genre: "Sports" },
];
const getMovieTitlesByIds = (movies, ...ids) => {
  // 1. Map through the IDs provided via Rest Parameters
  return ids.map((id) => {
    // 2. Use Array.find to locate the movie object
    const movie = movies.find((m) => m.id === id);

    // 3. Use Nullish Coalescing to handle missing movies
    // 4. Use Template Literals to format the final string
    const title = movie?.title ?? "Unknown Movie";

    return `ID ${id}: ${title}`;
  });
};

console.log(getMovieTitlesByIds(movies, 1, 3, 5));
// Output: ["ID 1: Baahubali", "ID 3: Mahanati", "ID 5: Jersey"]

console.log(getMovieTitlesByIds(movies, 1, 6));
// Output: ["ID 1: Baahubali", "ID 6: Unknown Movie"]
