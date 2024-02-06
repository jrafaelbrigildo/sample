// Example nested object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
      postalCode: '10001'
    },
    contact: {
      email: 'john.doe@example.com',
      phone: '555-1234'
    }
  };
  
  // Destructuring nested objects
  const { firstName, lastName, age, address: { city, country, postalCode }, contact: { email, phone } } = person;
  
  // Using the extracted values
  console.log(firstName);     // Output: John
  console.log(lastName);      // Output: Doe
  console.log(age);           // Output: 30
  console.log(city);          // Output: New York
  console.log(country);       // Output: USA
  console.log(postalCode);    // Output: 10001
  console.log(email);         // Output: john.doe@example.com
  console.log(phone);         // Output: 555-1234
  