// func is container of logic

const student1 = {
  name: "Abishek", // L1
  age: 20,
  address: {
    // L1
    // city: "Trichy", // L2
    state: "TN",
  },
};

const {
  name: fullname,
  address: { city = "N/A" },
  age: a,
} = student1;

console.log(fullname);
console.log(a);
console.log(city);

// function concept

// why func need  because of
//1.updatind
//2. readability

// MAX n number parameters

function moodReport(mood1 = "🙂", mood2 = "morning 🌅") {
  return `feeling ${mood1} this ${mood2}`;
}

console.log(moodReport());
console.log(moodReport("😎", "afternoon ☀️"));
//Feeling 😎 this afternoon ☀️.

function checkAgeCategory(age = 18) {
  return;
}

console.log(checkAgeCategory());
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));
// 👨 Adult
// 🧒 Minor
// 🧓 Senior
