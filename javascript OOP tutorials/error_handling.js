function divideNumbers(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
  
    return a / b;
  }
  
  try {
    const result = divideNumbers(10, 2);
    console.log('Result:', result);
  
    // Trying to divide by zero to trigger an error
    const zeroResult = divideNumbers(8, 0);
    console.log('This line will not be executed due to the error above');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('This block will always execute');
  }
  