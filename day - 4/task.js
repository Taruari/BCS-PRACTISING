var fullName = "Tarachand";
console.log(fullName.toLocaleLowerCase());

var fullName = "Tarachand";
console.log(fullName.toLocaleUpperCase());

var quote = "  Do Good , BE Good  ";
console.log(quote.trim());

console.log(quote.trimEnd());
console.log(quote.trimStart());

var quote = "do good , be good ";
console.log(quote.toLowerCase());
// console.log(quote.trimStart());
// console.log(quote.trimEnd());
console.log(quote.trim());
console.log(quote.toUpperCase());
console.log(quote.toLowerCase().trimStart().trimEnd());
console.log(quote.toUpperCase().trimStart().trimEnd());
console.log("Running Total");
console.log("30".padStart(20));
console.log("400".padStart(20));
console.log("730".padStart(20));

var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

var favourite = prompt("please enter your flavour name");
if (
  stock1 == favourite ||
  stock2 == favourite ||
  stock3 == favourite ||
  stock4 == favourite
) {
  console.log(`yes we have ${favourite} in stock`);
}

var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  isFriendly: true,
  favoriteToy: "ball",
  "graduated at": "Dog academy",
  "movie-title": "Harry potter",
};
petProfile.age = petProfile.age + 1;

console.log(petProfile.age);
console.log(petProfile.age++);
p;
