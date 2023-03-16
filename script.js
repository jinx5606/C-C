// Get all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Initialize the active div variable
let activeDiv = null;

// Add a click event listener to the document
document.addEventListener('click', (event) => {
  // Check if the clicked element is inside the active div and not a toggle button
  if (activeDiv && !activeDiv.contains(event.target) && !event.target.classList.contains('toggle-btn')) {
    // If it's not, hide the active div by removing the show class
    activeDiv.classList.remove('show');
    activeDiv = null;
  }
});

// Loop through each toggle button
toggleButtons.forEach(button => {
  // Add a click event listener to each button
  button.addEventListener('click', () => {
    // Get the target div by the data-target attribute of the clicked button
    const targetDiv = document.querySelector(button.dataset.target);
   
    
        // Check if the target div is already visible
        if (targetDiv.classList.contains('show')) {
            // If it is already visible, hide it by removing the show class
            activeDiv.classList.remove('show');
           // targetDiv.classList.remove('show');
           activeDiv = null;
          } else {
    // Check if the target div is the same as the active div
    if (targetDiv !== activeDiv) {
      // Hide the active div and show the target div
      if (activeDiv) {
        activeDiv.classList.remove('show');
      }
      targetDiv.classList.add('show');
      
      // Update the active div variable
      activeDiv = targetDiv;


    }
}
  });
});
