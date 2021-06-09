'use strict';

const togglerRight = document.querySelector('.toggler--right');
const togglerLeft = document.querySelector('.toggler--left');

const numbers = document.querySelectorAll('.number__item');
const header = document.querySelector('.page__header');

let count = 0;

togglerRight.addEventListener('click', () => {
  if (count < 2) {
    count++;
    numbers[count - 1].classList.remove('number__item--active');
    numbers[count].classList.add('number__item--active');
    togleBackground();
  }
});

togglerLeft.addEventListener('click', () => {
  if (count <= 2 && count > 0) {
    count--;
    numbers[count + 1].classList.remove('number__item--active');
    numbers[count].classList.add('number__item--active');
    togleBackground();
  }
});

const togleBackground = () => {
  switch (count) {
    case 1:
      header.classList.add('page__header--background2');
      header.classList.remove('page__header--background3');
      header.classList.remove('page__header--background1');
      break;
    case 2:
      header.classList.add('page__header--background3');
      header.classList.remove('page__header--background2');
      header.classList.remove('page__header--background1');
      break;
    default:
      header.classList.add('page__header--background1');
      header.classList.remove('page__header--background3');
      header.classList.remove('page__header--background2');
  };
};
