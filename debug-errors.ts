let productPrice: number = 500;
productPrice = 500;

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

let total: number = calculateTotal(500, 2);
console.log(total);