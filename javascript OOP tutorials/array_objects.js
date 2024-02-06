// Example array of objects
const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
    { id: 3, name: 'Charlie', grade: 'C' },
    { id: 4, name: 'David', grade: 'B' }
  ];
  
  // Looping through the array and accessing object properties
  for (const student of students) {
    console.log(`Student ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
  }
  
  // Using array methods to filter and map
  const highGrades = students.filter(student => student.grade === 'A' || student.grade === 'B');
  console.log('Students with high grades:', highGrades);
  
  const studentNames = students.map(student => student.name);
  console.log('Student names:', studentNames);
  