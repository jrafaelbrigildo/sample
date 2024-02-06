function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = () =>{console.log(`You drive the ${this.model}`)}
};

const car1 = new Car("Ford", "Mustang", 2024, "blue");
const car2 = new Car("Chevrolet", "Camaro", 2025, "green");

car1.drive();


/* const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",
    drive: () =>{console.log(`You drive the ${this.model}`)}
};

const car2 = {
    make: "Chevrolet",
    model: "camaro",
    year: 2025,
    color: "green",
    drive: () =>{console.log(`You drive the ${this.model}`)}
}; */