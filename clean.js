'use strict';

const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freentryancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Object.freeze : We can't add something in the spendingLimits 
const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
});



const getLimit = user => spendingLimits?.[user] ?? 0;

//Pure funciton 
const addExpense = function (state, limits, value, description, user = "jonas") {
    const cleanUser = user.toLowerCase();

    return (value <= getLimit(cleanUser)) ?
        [...state, { value: -value, description, user: cleanUser }] : state;

};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1)
console.log(newBudget2)
console.log(newBudget3)
console.log(budget);

const checkExpense = function () {
    for (const entry of budget)
        if (entry.value < -getLimit(entry.user))
            entry.flag = 'limit';
};
checkExpense();


const logBigExpenses = function (bigLimit) {
    let output = '';
    for (const entry of budget)
        output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

console.log(budget);
logBigExpenses(500)