//const student1 = {
  //name: "Abishek",
  //age: 20,
  //address: {
    //city: "Trichy",
   // state: "TN",},
  //hobbies: ["cricket", "football", "carrom"],
 // skills: ["Dance", "Violin"],
};
//const { name, address, hobbies } = student1;
//console.log(address);

const { name = "Surya", skills = ["HTML", "CSS", "Singer"] } = student;

console.log(skills);
console.log(name);
