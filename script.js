// Importing module
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";

// addToCart("Private Jets", 5);
// console.log(price, qt);

// console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("Bugati", 10);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qt);

// import add, { cart } from "./shoppingCart.js";
// add("9zPC", 10);

// console.log(cart);

///////////////////////////////////////////////////////////////////////////////

//// Top-leverl Await (ES 2022)

// console.log("Start Fetching ");
// let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// let data = await res.json();
// console.log(data);

// console.log("It's something after the fetch data");

let getLastPost = async function () {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  //   console.log (data);

  return { title: data.at(-1).title, body: data.at(-1).body };
};

let lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

let lastPost2 = await getLastPost();
console.log(lastPost2);
