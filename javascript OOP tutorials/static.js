class Car {
    // Constructor method to initialize object properties
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Instance method
    displayInfo() {
      console.log(`${this.year} ${this.make} ${this.model}`);
    }
  
    // Static method (associated with the class, not an instance)
    static isCarValidYear(year) {
      return year >= 2000 && year <= new Date().getFullYear();
    }
  }
  
  // Creating instances of the Car class
  const car1 = new Car("Toyota", "Camry", 2022);
  const car2 = new Car("Ford", "Mustang", 1998);
  
  // Using instance methods
  car1.displayInfo(); // Output: 2022 Toyota Camry
  car2.displayInfo(); // Output: 1998 Ford Mustang
  
  // Using the static method
  console.log(Car.isCarValidYear(2022)); // Output: true
  console.log(Car.isCarValidYear(1998)); // Output: false
  