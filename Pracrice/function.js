// const getRectArea = function (width, height) {
//   return width * height;
// };

// console.log(getRectArea(3, 4));
// // Expected output: 12

// const x = function (y) {
//   return y * y;
// };
// console.log(x(6));

// const nums = [10, 5, 15];
// const allNumber = () => nums.map((num) => num * num);
// console.log(allNumber);
// //  [ 100, 25, 225  ]
// console.log(nums);
// //  [ 10, 5, 15 ]

// function sum(a, b) {
//   let c = a + b;
//   return c.toFixed(2); // Exit the functuion
//   // return 2
//   // console.log("Hiiiiiiiiiii");
// }

const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

const getFirstNDishNames = (orderList, n) => {
  return orderList
    .slice(0, n)
    .map((order) => order.dishName)
    .join(", ");
};

console.log(getFirstNDishNames(orders, 3));
console.log(getFirstNDishNames(orders, 1));

const getDishNamesByIds = (orderList, ...ids) =>
  `Selected Dishes: ${ids.map((id) => orders.find((order1) => order1.id === id)?.dishName ?? "Unknown Dish")}`;

console.log(getDishNamesByIds(orders, 1, 3, 5));
console.log(getDishNamesByIds(orders, 1, 6));

console.log(getDishNamesByIds(orders, 5, 1));
console.log(getDishNamesByIds(orders, 3, 3, 999));

// Write `listOrders(...orderItems)`.

// ### Tests
// ```js
// console.log(listOrders(...orders));
// // Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)

// console.log(listOrders(orders[0], orders[1], orders[111]));
// // Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)

const listOrders = (...orderItems) => {
  return orders.map((foodName) => foodName.dishName);
};

console.log(listOrders(orders[0], orders[1], orders[111]));
