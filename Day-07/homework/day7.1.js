//

// setup code
// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));
//out put code
// Feeling 🙂 this morning 🌅.
// Feeling 😎 this afternoon ☀️.

//

// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

//👨 Adult
//🧒 Minor
//🧓 Senior

// function checkAgeCategory(age = 18) {
//   if (age >= 60) {
//     return `Senior`;
//   } else if (age < 18) {
//     return `Minor `;
//   } else {
//     return `Adult`;
//   }
// }

// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(60));

//CODE setup
// const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };
// console.log(introduceWizard(wizard));
// out put
//🪄 Archmage Merlin wields a wand with Phoenix Feather core.

// const wizard = {
//   name: "Merlin",
//   title: "Archmage",
//   wand: { core: "Phoenix Feather" },
// };
// function introduceWizard({ name, title, wand: { core } }) {
//   return ` 🪄  ${title} ${name} wields a wand with ${core}.`;
// }

// console.log(introduceWizard(wizard));

//mergeInventory(existing, incoming)
// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));
// out put ["🍎", "🥪", "🍫", "🍇", "🧃"]

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];

// function mergeInventory(existing, incoming) {
//   return ` [ ...existing , ...incoming,"🧃" ] `;
// }
//console.log(mergeInventory(shelf, delivery));
