const toggleButtons = document.querySelectorAll('.toggle-btn');

let activeDiv = null;

// Add a click event listener to the document
document.addEventListener('click', (event) => {
  if (activeDiv && !activeDiv.contains(event.target) && !event.target.classList.contains('toggle-btn')) {
    activeDiv.classList.remove('show');
    activeDiv = null;
  }
});


toggleButtons.forEach(button => {

  button.addEventListener('click', () => {
    const targetDiv = document.querySelector(button.dataset.target);
   
        if (targetDiv.classList.contains('show')) {
            activeDiv.classList.remove('show');
           activeDiv = null;
          } else {

    if (targetDiv !== activeDiv) {
 
      if (activeDiv) {
        activeDiv.classList.remove('show');
      }
      targetDiv.classList.add('show');

      activeDiv = targetDiv;
    }
}
  });
});
