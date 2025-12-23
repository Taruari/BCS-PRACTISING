// const person = { name: "Alice", age: 30, city: "New York" };

// // Use object destructuring to extract name and age
// const extractPersonInfo = (person) => {
//   // Your code here - use destructuring
//   const { name, age } = person;
//   return `${name} is ${age} years old`;
// };

// // console.log(extractPersonInfo(person));
// const colors = ["red", "green", "blue", "yellow"];
// const coordinates = [10, 20];

// // Use array destructuring to extract first two colors
// const getFirstTwoColors = (colors) => {
//   // Your code here - use array destructuring
//   const [first, second] = colors;
//   return `First: ${first}, Second: ${second}`;
// };

// console.log(getFirstTwoColors(colors));
// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // Write a function that extracts the user's name and theme with default values
// const getUserSettings = (user) => {
//   // Your code here - use destructuring with default values
//   const { name, settings: { theme = "light" } = {} } = user;

//   return `${name} prefers the ${theme} theme`;
// };

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));
const greet = (name) => {
  // 1. Get the current hour (0-23)
  const hour = new Date().getHours();
  let timeOfDay;

  // 2. Determine the greeting based on the hour
  if (hour >= 0 && hour <= 11) {
    timeOfDay = "Morning";
  } else if (hour >= 12 && hour <= 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  // 3. Return the formatted string
  return `Good ${timeOfDay}, ${name}!`;
};

// Test with different times
console.log(greet("Alice"));
