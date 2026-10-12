
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

interface DiscountedProduct extends Product {
    discountPercent: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 55000, inStock: true, tags: ["electronics"] },
    { id: 2, name: "Mouse", price: 799, inStock: true, tags: ["accessory"] },
    { id: 3, name: "Keyboard", price: 1499, inStock: false },
    { id: 4, name: "Monitor", price: 12000, inStock: true, tags: ["display"] }
];

function getAvailableProducts(products: Product[]): Product[] {
    return products.filter(product => product.inStock);
}

function applyDiscountToProducts(
    products: Product[]
): DiscountedProduct[] {
    return products.map(product => ({
        ...product,
        price: Math.round(product.price * 0.9 * 100) / 100,
        discountPercent: 10
    }));
}

console.log("Available products:");
console.log(getAvailableProducts(products));

console.log("Discounted products:");
console.log(applyDiscountToProducts(products));
export {};
