var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  isFriendly: true,
  favoriteToy: "ball",
  "graduated at": "Dog academy",
  "movie-title": "Harry potter",
  owner: {
    name: "Tarachand",
    mobile: "9231319400",
  },
};

const x1 = [60, 50, 10];
const x2 = [70, 90, 20];
const x3 = [...x1, ...x2];
console.log(x3);

const book = {
  name1: "Harry Potter II Chamber of Secret ",
  author: "J.K Rowling",
};

const detail = {
  year: 2002,
  price: 1200,
};

const fullDetail = {
  ...book,
  ...detail,
};

console.log(fullDetail);

const detail2 = { authorAge: 55, year: 2002, price: 1200 };

const detail3 = {
  name1: "Harry Potter II Chamber of Secret ",
  author: "J.K Rowling",
};

const detail4 = {
  ...detail3,
  ...detail2,
};

console.log(detail4);
