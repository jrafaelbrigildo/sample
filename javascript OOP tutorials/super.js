// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Subclass inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the parent class (Animal)
      super(name);
      this.breed = breed;
    }
  
    // Override the speak method of the parent class
    speak() {
      console.log(`${this.name} barks loudly.`);
    }
    dogBreed(){
        console.log(`${this.name} is a ${this.breed} breed.`)
    }
    // New method specific to the Dog class
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  // Creating instances of the Animal and Dog classes
  const genericAnimal = new Animal("Generic Animal");
  const myDog = new Dog("Buddy", "Golden Retriever");
  
  // Using methods from the parent class
  genericAnimal.speak();  // Output: Generic Animal makes a sound.
  
  // Using methods from the subclass
  myDog.speak();  // Output: Buddy barks loudly.
  
  // Using a method specific to the subclass
  myDog.fetch();  // Output: Buddy is fetching the ball.
  
  myDog.dogBreed();