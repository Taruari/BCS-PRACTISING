// create a function mergeInventory(existing, incoming)

// 🛠️ Setup Code
// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));
// ✅ Output
// ["🍎", "🥪", "🍫", "🍇", "🧃"]

// function mergeInvestory(existing, incoming) {
//   return `...existing , ...incoming "🧃"`;
// }
// const shelf = mergeInvestory[("🍎", "🥪")];
// const delivery = mergeInvestory[("🍫", "🍇")];

// console.log(mergeInventory(shelf, delivery));

function mergeInventory(existing, incoming) {
  return [...existing, ...incoming, "🧃"];
}
const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];

console.log(mergeInventory(shelf, delivery));

// Create a function packBag(owner = "Anon", ...items)

// 🛠️ Setup Code
// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());
// ✅ Output
// 🎒 Natasha's bag contains: 💄, 🔫
// 🎒 Anon's bag is empty.

// function packBag(owner = "Anon", ...items) {
//   return [`...items`];
// }
// const items = ("Natasha", "💄", "🔫");

// Create a function whereAreYou(personObj)

// 🛠️ Setup Code
// console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
// console.log(whereAreYou({}));
// ✅ Output
// Thor is currently in Asgard, Yggdrasil 🌍
// Someone is currently in Unknown, Earth 🌍

function whereAreYou(personObj) {
  //   return `${user} is currently in ${city} , ${planet}`;
  // }

  // const {
  // user = "someone",
  // location: { city = "Unknown", planet = "Earth" } = {},
  // } = personObj;
  const {
    user = "Someone",
    location: { city = "Unknown", planet = "Earth" } = {},
  } = personObj;
  return `${user} is currently in ${city}, ${planet} 🌍`;
}
console.log(
  whereAreYou({
    user: "Thor",
    location: { city: "Asgard", planet: "Yggdrasil" },
  })
);
console.log(whereAreYou({}));
