import 'bootstrap';

const form = document.querySelector('.form');

const formSubmit = (event) => {
  event.preventDefault();
  form.submit();
  form.reset();
};

form.addEventListener('submit', formSubmit);

// view more

// const button = document.querySelector('#myBtn');
// let state = false;
// const moreTextOne = document.querySelector('one');
// const moreTextTwo = document.querySelector('two');

// function myFunction() {
//   if (moreTextTwo.style.display === 'none') {
//     moreTextTwo.style.display = 'inline';
//     button.innerHTML = 'Read more';
//   }

//   if (moreTextOne.style.display === 'none') {
//     moreTextOne.style.display = 'inline';
//     button.innerHTML = 'Read more';
//   } else {
//     moreTextTwo.style.display = 'none';
//     button.innerHTML = 'Read less';
//     moreTextTwo.style.display = 'inline';
//   }
// }
// function hide() {
//   if (moreTextTwo.style.display === 'inline') {
//     moreTextTwo.style.display = 'none';
//     button.innerHTML = 'Read more';
//   }
//   if (moreTextOne.style.display === 'inline') {
//     moreTextOne.style.display = 'none';
//     button.innerHTML = 'Read more';
// }
// }
// function displayHide() {
//   if (state === false) {
//     myFunction();
//     state = true;
//   }
//   else if (state === true) {
//     hide();
//     state = false;
//   }
// }

// button.addEventListener('click', displayHide);

const products = document.querySelectorAll('.products');
const btnViewMore = document.querySelector('.viewMore');
const btnViewLess = document.querySelector('.viewLess');

const viewLess = function () {
  for (let i = 3; i < products.length; i++) { products[i].classList.add('hide'); }
  btnViewLess.classList.add('hideViewLess');
  btnViewMore.classList.remove('hide');
};

const viewMore = function () {
  for (let i = 3; i < products.length; i++) {
    products[i].classList.remove('hide');
    btnViewMore.classList.add('hide');
    btnViewLess.classList.remove('hideViewLess');
  }
};

viewLess();

btnViewMore.addEventListener('click', viewMore);
btnViewLess.addEventListener('click', viewLess);
