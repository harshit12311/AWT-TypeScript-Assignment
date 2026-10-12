"use strict";
let productName = "Laptop";
let price = 55000;
let inStock = true;
let tags = ["electronics", "computer", "accessory"];
let productId = "101";
function printProductInfo() {
    console.log(`Product : ${productName}, Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}, Product ID: ${productId}`);
}
printProductInfo();
// Using any (less type-safe)
let product = "Laptop";
product = 450;
// Refactored using a specific type
let productInfo = "Laptop";
// productInfo = 450; // TypeScript would report an error
