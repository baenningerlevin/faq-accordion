'use strict';

const questionEls = document.querySelectorAll('.question');

questionEls.forEach((questionEl) => {
  questionEl.addEventListener('click', () => {
    questionEl.nextElementSibling.classList.toggle('hidden');
    questionEl.children[2].classList.toggle('hidden');
    questionEl.children[1].classList.toggle('hidden');
  });
});