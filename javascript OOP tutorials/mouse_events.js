// Get the target element by its ID
const targetElement = document.getElementById('targetElement');

// Click event
targetElement.addEventListener('click', () => {
  alert('Click event triggered!');
});

// Mouseover event
targetElement.addEventListener('mouseover', () => {
  targetElement.style.backgroundColor = 'lightcoral';
});

// Mouseout event
targetElement.addEventListener('mouseout', () => {
  targetElement.style.backgroundColor = 'lightblue';
});
