// #### 🛠️ Setup Code

// ```js
// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));
// ````

// ---

// #### ✅ Output

// ```
// ["🍎", "🥪", "🍫", "🍇", "🧃"]

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];

// function mergeInventory() {
//   return [...shelf, ...delivery];
// }

// console.log(mergeInventory(shelf, delivery));
// function mergeInventory(shelf = [], delivery = []) {
//   return [...shelf, ...delivery];
// }

// const shelf = undefined;
// const delivery = ["🍫", "🍇"];

// console.log(mergeInventory(shelf, delivery)

// for (let thali = 0; thali <= 10; thali++) {
//   console.log("🍽️".repeat(thali));
// }
// for (let exercise = 0; exercise <= 10; exercise++) {
//   console.log(`My pushup count is ${exercise}💪`);
// }

// let sweetNo = 10;
// while (sweetNo > 0) {
//   console.log(`${sweetNo} 🍠🍠 `);
//   sweetNo--;
// // }
// const csk3 = {
//   captain: "MSD",
//   color: "yellow",
// };

// // console.log(csk3.stats.win); // Cannot read properties of undefined (reading 'win')
// console.log(csk3.stats.win);

// const bcsTrainee = {
//   id: 1234,
//   name: "Sunil",
//   address: {
//     city: "Bangalore",
//     state: "Karnataka",
//   },
// };

// function user() {
//   console.log(bcsTrainee.name.city);
// // }
// const bcsTrainee = {
//   id: 1234,
//   name: "Sunil",
//   address: {
//     state: "Karnataka",
//   },
// };

// function user() {
//   // Access address first, then city
//   return bcsTrainee?.address?.city ?? " data not found";
// }
// console.log(user());
// // Output: data not found

const user = {
  profile: {
    name: "Vaibhav",
    address: { city: "Bangalore" },
  },
};

// Combining Optional Chaining (?.) with Nullish Coalescing (??)
const userCity = user.profile.address.city;

console.log(userCity);
// Output: Bangalore
