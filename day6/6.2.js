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
const { address } = student;
const { city } = address;
console.log(city);
const { hobbies } = student;
const [h1, h2, h3] = hobbies;
console.log(h2);
