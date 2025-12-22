// function introduceWizard({ title = "Master", name, wand: { core } }) {
//   return `🪄 ${title} ${name} wields a wand with ${core}.`;
// }

// const introduceWizard1 = ({ title = "Master", name, wand: { core } }) => {
//   return `🪄 ${title} ${name} wields a wand with ${core}.`;
// };

// const introduceWizard = ({ title = "Master", name, wand: { core } }) =>
//   `🪄 ${title} ${name} wields a wand with ${core}.`;

// const wizard = {
//   name: "Merlin",
//   title: "Archmage",
//   wand: { core: "Phoenix Feather" },
// };
// console.log(introduceWizard(wizard));

// Task 1.1 - while loop

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️

// let heart = 1;
// while (heart <= 5) {
//   console.log("❤️".repeat(heart));
//   heart++;
// }
// // Task 1.2 - for loop

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️
// for (let heart = 1; heart <= 5; heart++) {
//   console.log("❤️".repeat(heart));
// }
// Task 1.3 - for loop or while loop
// printPattern(emoji, noOfRows);

// printPattern("🐳", 3);

// Output
// 🐳
// 🐳🐳
// 🐳🐳🐳

// work 1
// for (let fish = 1; fish <= 3; fish++) {
//   console.log("🐳".repeat(fish));
// }
// work 2
// let shark = 1;
// while (shark <= 3) {
//   console.log("🐳".repeat(shark));
//   shark += 1;
// }
