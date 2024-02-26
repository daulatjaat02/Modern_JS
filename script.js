// # script.js

// Importing module

// console.log('Importing module')
// // Importing Named export module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js'
// console.log(shippingCost) // Error shippingCost is not defined

// addToCart('S24', 5) // 5 S24 added to the cart

// // importing the changed value from default export
// console.log(price, qt) // 2300 7

// Importing Everything 
// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('Harles', 12)

// console.log(ShoppingCart.totalPrice, ShoppingCart.qt)

// import defaults
import add, { cart, totalPrice } from './shoppingCart.js'
add('Bullets', 3);
add('Harles', 5);
add('Himalayas', 2);

console.log(cart);

//////////////////////////////////////////////////////////////////////////

// Top - Level Await

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data)
// console.log('Something after the fetch API')

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   // console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body }
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // It is not very clean way
// // lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

////////////////////////////////////////////////////////////////////////////////////////////

// Module Pattern

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 23;
  const totalPrice = 237;
  const totalQunatity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart `);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQunatity
  }
})();

shoppingCart2.addToCart('CPU', 5);
shoppingCart2.addToCart('Laptop', 8);
shoppingCart2.addToCart('Lights', 15);

// shoppingCart2.orderStock('CPU', 2); // Type Error
console.log(shoppingCart2); // 
console.log(shoppingCart2.shippingCost); // undefined

////////////////////////////////////////////////////////////////////////////////////

// Common Js
// Export
// export.addToCart = function () {...........};

// import
// const { addToCart } = require('./shoppingCart.js');

/////////////////////////////////////////////////////////////////////////////////////

import 'core-js/stable';
import 'regenerator-runtime';




















/////////////////////////////////////////////////////////////////////////////////////
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
/////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. firstly the exporting log will console then the importing log will console

// Importing Named export module
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";

// addToCart("Private Jets", 5);

// // // importing the changed value from default export
// console.log(price, qt);
// console.log("Importing module");

// // Importing the changed value from default export (differently)
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("Bugati", 10);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qt);

// // // Importing default export
// import add, { cart } from "./shoppingCart.js";
// add("9zPC", 10);
// console.log(cart);

///////////////////////////////////////////////////////////////////////////////

//// Top-leverl Await (ES 2022)
//// 1. It is possible with just MODULES
//// 2. It blocks the execution of the module (not just this module but all modules imported)

// console.log("Start fetching ");
// let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// let data = await res.json();
// console.log(data);
// console.log("It's something after the fetch data");

// let getLastPost = async function () {
//   let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   let data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, body: data.at(-1).body };
// };
// let lastPost = getLastPost();
// console.log(lastPost); // Promise { <pending> }

// Not very clean
// getLastPost().then((last) => console.log(last));

///////////////////////////////////////////////////////////////////////////////////

//// The Module Pattern

// let shoppingCart2 = (function () {
//   let cart = [];
//   let shippingCost = 10;
//   let totalPrice = 234;
//   let totalQunatity = 23;

//   let addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to the cart (Shipping cost is ${shippingCost})`
//     );
//   };
//   let orderStack = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier `);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQunatity,
//   };
// })();

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
// import cloneDeep from "lodash-es";

// let state = {
//   cart: [
//     { product: "bread", quantity: 5 },
//     { product: "pizza", quantity: 8 },
//   ],
//   user: { loggedIn: true },
// };
// // let stateClone = Object.assign({}, state);
// // state.user.loggedIn = false;
// // console.log(stateClone);
// let stateClone = cloneDeep(state);
// state.user.loggedIn = false;
// console.log(stateClone);

// //// Hot module : It'll help to not reload the page (only in parcel)
// if (module.hot) {
//   module.hot.accept();
// }

// // Let's see how the ES6 class work in ES5 (Babel)
// class Person {
//   #greeting = "Hello";
//   constructor(name) {
//     this.name = name;
//     console.log(`${this.#greeting}, ${this.name}`);
//   }
// }
// let daulat = new Person("Daulat");
// console.log("Daulat" ?? null);

// // Like these new features in ES6 can't be used in ES5 thatswhy we have to use polyfill
// console.log(cart.find((el) => el.quantity >= 2));
// Promise.resolve("This is resolved Promise").then((data) => console.log(data));

// import "core-js"; // It will polyfill the all features

// // for specific
// // import "core-js/stable/array/find";
// // import "core-js/stable/Promise";

// //// polyfill for async functions
// import "regenerator-runtime/runtime.js";
