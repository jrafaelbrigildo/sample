// Function that simulates a chore with a delay
function doChore(chore, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Finished ${chore}`);
        resolve(`${chore} completed`);
      }, time);
    });
  }
  
  // Async function to perform a series of chores
  async function performChores() {
    console.log('Starting chores...');
  
    try {
      const result1 = await doChore('Walk the dog', 2000);
      console.log(result1);
  
      const result2 = await doChore('Clean the kitchen', 3000);
      console.log(result2);
  
      const result3 = await doChore('Take out the trash', 1500);
      console.log(result3);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log('Chores completed!');
    }
  }
  
  // Calling the async function to perform chores
  performChores();
  