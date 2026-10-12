
let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
let tags: string[] = ["electronics", "computer", "accessory"];
let productId: number | string = "101";

function printProductInfo(): void {
    console.log(
        `Product : ${productName}, Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}, Product ID: ${productId}`
    );
}

printProductInfo();

// Using any (less type-safe)
let product: any = "Laptop";
product = 450;

// Refactored using a specific type
let productInfo: string = "Laptop";
// productInfo = 450; // TypeScript would report an error
