// const users = [
//   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
//   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
//   { id: 4, name: "Deepak", friends: [] },
// ];

// // const getFirstFriendName = (users, userId) => {

// // };

// // console.log(getFirstFriendName(users, 1));
// // console.log(getFirstFriendName(users, 2));
// // console.log(getFirstFriendName(users, 3));
// // console.log(getFirstFriendName(users, 4));
// // const users = [
// //   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
// //   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
// //   { id: 4, name: "Deepak", friends: [] },
// // ];

// // const getFirstFriendName = (users, userId) => {
// //   const user = users.find((u) => u.id === userId);

// //   // 1. Check if user exists at all
// //   if (!user) return "User not found";

// //   // 2. Destructure the first friend's name
// //   const {
// //     friends: [{ name: firstFriendName } = {}],
// //   } = user;

// //   // 3. Return the name if it exists, otherwise the custom message
// //   return firstFriendName || `${user.name} has no friends 🥲`;
// // };

// // console.log(getFirstFriendName(users, 1)); // Bob
// // console.log(getFirstFriendName(users, 2)); // Eve
// // console.log(getFirstFriendName(users, 3)); // User not found
// // console.log(getFirstFriendName(users, 4)); // Deepak has no friends 🥲

// const users = [
//   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
//   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
//   { id: 4, name: "Deepak", friends: [] },
// ];

// // Write a function that returns the name of a user's first friend
// const getFirstFriendName = (users, userId) => {
//   // Your code here - use nested destructuring
//   const user = users.find((u) => u.id === userId);
//   if (!user) {
//     return "user not found ";
//   }
//   const {
//     friends: [{ name: friendname } = []],
//   } = user;
//   return friendname || `${user.name} has no friends  🥲 `;
// };

// console.log(getFirstFriendName(users, 1));
// console.log(getFirstFriendName(users, 2));
// console.log(getFirstFriendName(users, 3));
// console.log(getFirstFriendName(users, 4));
