async function readAndModifyJsonFile(filePath) {
    try {
      // Fetch the JSON file
      const response = await fetch(filePath);
      const jsonData = await response.json();
  
      // Modify the data
      jsonData.age += 1;
      jsonData.city = 'New City';
  
      // Log the modified data
      console.log('Modified Data:', jsonData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Specify the path to the JSON file
  const jsonFilePath = 'data.json';
  
  // Call the function to read and modify the JSON file
  readAndModifyJsonFile(jsonFilePath);
  