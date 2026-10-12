
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

let products: Product[] = [
    { id: 1, name: "Laptop", price: 55000, inStock: true, tags: ["electronics"] },
    { id: 2, name: "Mouse", price: 799, inStock: true, tags: ["accessory"] },
    { id: 3, name: "Keyboard", price: 1499, inStock: false, tags: ["computer"] },
    { id: 4, name: "Monitor", price: 12000, inStock: true, tags: ["display"] }
];

let nextId = 5;

const form = document.querySelector<HTMLFormElement>("#productForm")!;
const nameInput = document.querySelector<HTMLInputElement>("#name")!;
const priceInput = document.querySelector<HTMLInputElement>("#price")!;
const tagsInput = document.querySelector<HTMLInputElement>("#tags")!;
const stockInput = document.querySelector<HTMLInputElement>("#inStock")!;
const searchInput = document.querySelector<HTMLInputElement>("#search")!;
const tableBody = document.querySelector<HTMLTableSectionElement>("#productTable")!;
const summary = document.querySelector<HTMLParagraphElement>("#summary")!;

function getAvailableProducts(items: Product[]): Product[] {
    return items.filter(product => product.inStock);
}

function renderProducts(): void {
    const search = searchInput.value.trim().toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        (product.tags ?? []).some(tag => tag.toLowerCase().includes(search))
    );

    tableBody.replaceChildren();

    filteredProducts.forEach(product => {
        const row = document.createElement("tr");

        const values = [
            String(product.id),
            product.name,
            `₹${product.price.toFixed(2)}`,
            product.inStock ? "In stock" : "Out of stock",
            (product.tags ?? []).join(", ") || "—"
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const stockButton = document.createElement("button");
        stockButton.textContent = product.inStock ? "Mark Out" : "Mark In";

        stockButton.addEventListener("click", () => {
            product.inStock = !product.inStock;
            renderProducts();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";

        deleteButton.addEventListener("click", () => {
            products = products.filter(item => item.id !== product.id);
            renderProducts();
        });

        actionCell.append(stockButton, document.createTextNode(" "), deleteButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });

    summary.textContent =
        `${products.length} total products | ${getAvailableProducts(products).length} in stock`;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (!name || !Number.isFinite(price) || price <= 0) {
        alert("Enter a product name and a price greater than zero.");
        return;
    }

    const tags = tagsInput.value
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

    products.push({
        id: nextId++,
        name,
        price,
        inStock: stockInput.checked,
        tags
    });

    form.reset();
    renderProducts();
});

searchInput.addEventListener("input", renderProducts);

renderProducts();
export {};