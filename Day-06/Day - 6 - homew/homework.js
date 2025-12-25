const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
};

const { name } = student;
console.log(name);
const { age } = student;
console.log(age);
const { address } = student;
const { city } = address;
console.log(city);
const { hobbies } = student;
const [h1, h2, h3] = hobbies;
console.log(h1);
console.log(h2);
console.log(h3);
