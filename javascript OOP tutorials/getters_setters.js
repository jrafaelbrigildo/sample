class Circle {
    constructor(radius) {
      // Use a private property (_radius) to store the radius
      this._radius = radius;
    }
  
    // Getter for the radius
    get radius() {
      return this._radius;
    }
  
    // Setter for the radius with validation
    set radius(newRadius) {
      if (newRadius > 0) {
        this._radius = newRadius;
      } else {
        console.log("Radius must be a positive number.");
      }
    }
  
    // Getter for the area
    get area() {
      return Math.PI * this._radius ** 2;
    }
  }
  
  // Creating an instance of the Circle class
  const myCircle = new Circle(5);
  
  // Using the getter for radius
  console.log(myCircle.radius); // Output: 5
  
  // Using the setter for radius
  myCircle.radius = 8;
  console.log(myCircle.radius); // Output: 8
  
  // Trying to set an invalid radius
  myCircle.radius = -3; // Output: Radius must be a positive number.
  
  // Using the getter for area
  console.log(myCircle.area); // Output: 201.06192982974676
  