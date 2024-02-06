class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: $${this.price.toFixed(2)}`);
    }
    calculateTax(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);

product2.displayProduct();

const total = product2.calculateTax(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);