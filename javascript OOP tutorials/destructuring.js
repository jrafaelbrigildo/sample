// Example object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Destructuring the object
  const { firstName, lastName, age, address: { city, country } } = person;
  
  // Using the extracted values
  console.log(firstName);  // Output: John
  console.log(lastName);   // Output: Doe
  console.log(age);        // Output: 30
  console.log(city);       // Output: New York
  console.log(country);    // Output: USA
  