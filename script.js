// 1. firstly the exporting log will console then the importing log will console

// Importing Named export module
import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";

addToCart("Private Jets", 5);
// importing the changed value from default export
// console.log(price, qt);
// console.log("Importing module");

// Importing the changed value from default export (differently)
import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("Bugati", 10);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qt);

// Importing default export
import add, { cart } from "./shoppingCart.js";
add("9zPC", 10);
// console.log(cart);

///////////////////////////////////////////////////////////////////////////////

//// Top-leverl Await (ES 2022)
//// 1. It is possible with just MODULES
//// 2. It blocks the execution of the module (not just this module but all modules imported)

// console.log("Start fetching ");
let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
let data = await res.json();
// console.log(data);
// console.log("It's something after the fetch data");

let getLastPost = async function () {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  // console.log(data);

  return { title: data.at(-1).title, body: data.at(-1).body };
};
let lastPost = getLastPost();
// console.log(lastPost); // Promise { <pending> }

// Not very clean
// getLastPost().then((last) => console.log(last));

// let lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////////////////////////////////////////////////

//// The Module Pattern

let shoppingCart2 = (function () {
  let cart = [];
  let shippingCost = 10;
  let totalPrice = 234;
  let totalQunatity = 23;

  let addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to the cart (Shipping cost is ${shippingCost})`
    );
  };
  let orderStack = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier `);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQunatity,
  };
})();

// shoppingCart2.addToCart("iphones", 3); //  3 iphones added to the cart (Shipping cost is 10)
// shoppingCart2.addToCart("samsung", 2); //  2 samsung added to the cart (Shipping cost is 10)
// console.log(shoppingCart2); // { cart: [ { product: 'iphones', quantity: 3 }, { product: 'samsung', quantity: 2 } ], totalPrice: 234, totalQunatity: 23 }
// console.log(shoppingCart2.cart);
// console.log(shoppingCart2.shippingCost); // undefined

//////////////////////////////////////////////////////////////////////////////////////

/// Common JS module

// // Exporting module
// // It's note working in browser It's for node.js
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to the cart (Shipping cost is ${shippingCost})`
//     );
//   };

// // Importing module
// let { addToCart } = require("./shoppingCart.js");

// /////////////////////////////////////////////////////////////////////////////////////

// A brief introduction to the command line
// ///////////////////////////////////////////////////////////////////////

///// NPM :
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

let state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 8 },
  ],
  user: { loggedIn: true },
};
// let stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);

let stateClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone); // loggedIn is still true
