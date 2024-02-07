// Function that returns a Promise
function simulateAsyncOperation(success) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        if (success) {
          resolve('Operation succeeded!');
        } else {
          reject('Operation failed!');
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the Promise
  console.log('Start of the script');
  
  simulateAsyncOperation(true)
    .then((result) => {
      console.log(result); // Output: Operation succeeded!
    })
    .catch((error) => {
      console.error(error); // This will not be executed in this case
    })
    .finally(() => {
      console.log('End of the script'); // Output: End of the script
    });
  