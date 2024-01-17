'use strict';

const questionEls = document.querySelectorAll('.question');

questionEls.forEach((questionEl) => {
  questionEl.addEventListener('click', function () {
    // If the clicked question is already showing, hide it
    if (this.nextElementSibling.classList.contains('show')) {
      this.nextElementSibling.classList.remove('show');
      this.children[2].classList.add('hidden'); // show first icon
      this.children[1].classList.remove('hidden'); // hide second icon
    } else {
      // Hide all other answers and adjust icons
      questionEls.forEach((questionEl) => {
        questionEl.nextElementSibling.classList.remove('show');
        questionEl.children[2].classList.add('hidden'); // show first icon
        questionEl.children[1].classList.remove('hidden'); // hide second icon
      });

      // Show the clicked question's answer and adjust icons
      this.nextElementSibling.classList.add('show');
      this.children[2].classList.remove('hidden'); // hide first icon
      this.children[1].classList.add('hidden'); // show second icon
    }
  });
});
