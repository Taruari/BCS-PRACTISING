//quedtion 02//////////////////////////////////////////////////////////////////////////

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

// ## 2) 🍔 Slice and List First N Dish Names

// ### Task

// Write `getFirstNDishNames(orderList, n)`.

// ### Tests

// ```js
// console.log(getFirstNDishNames(orders, 3));
// // Burger, Pizza, Sushi

// console.log(getFirstNDishNames(orders, 1));
// // Burger

const getFirstNDishNames = (orderList, n) => {
  return orderList
    .slice(0, n) // Take only the first n items
    .map((order) => order.dishName) // Extract just the dish names
    .join(", "); // Turn the array into a comma-separated string
};

console.log(getFirstNDishNames(orders, 3));
// Output: "Burger, Pizza, Sushi"

console.log(getFirstNDishNames(orders, 1));
// Output: "Burger"
