"use strict";
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
function applyBulkDiscount(prices, discountRate) {
    return prices.map(price => price - (price * discountRate / 100));
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));
console.log(applyBulkDiscount([100, 200, 300], 10));
// Demonstrating block scope
for (let i = 0; i < 3; i++) {
    let message = "Inside the loop";
    console.log(message);
}
// console.log(message); // Error: message is not defined here
