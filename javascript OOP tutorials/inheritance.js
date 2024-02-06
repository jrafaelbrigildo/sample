// Base class
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      console.log(`${this.year} ${this.make} ${this.model}`);
    }
  }
  
  // Subclass inheriting from Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      // Call the constructor of the parent class (Vehicle)
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    // Override the displayInfo method of the parent class
    displayInfo() {
      console.log(`${this.year} ${this.make} ${this.model} - ${this.numDoors} doors`);
    }
  }
  
  // Creating instances of the Vehicle and Car classes
  const genericVehicle = new Vehicle("Generic", "Model", 2022);
  const myCar = new Car("Toyota", "Camry", 2022, 4);
  
  // Using methods from the base class
  genericVehicle.displayInfo();  // Output: 2022 Generic Model
  
  // Using methods from the subclass
  myCar.displayInfo();  // Output: 2022 Toyota Camry - 4 doors
  