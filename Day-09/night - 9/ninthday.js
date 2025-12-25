function printPattern(emoji, noOfROws) {
  for (let emojiCount = 1; emojiCount <= noOfROws; emojiCount++) {
    console.log(emoji.repeat(emojiCount));
  }
}
printPattern("🐳", "3");

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

for (let i = 0; i < avengers.length; i++) {
  console.log(`${avengers[i]} contain ${avengers[i].length} letters`);
}
