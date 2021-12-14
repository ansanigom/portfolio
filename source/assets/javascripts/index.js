import 'bootstrap';

const form = document.querySelector('.form');

const formSubmit = (event) => {
  event.preventDefault();
  form.submit();
  form.reset();
};

form.addEventListener('submit', formSubmit);

// position: sticky
const stickyElem = document.querySelector('.hider');

/* Gets the amount of height
of the element from the
viewport and adds the
pageYOffset to get the height
relative to the page */
const currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function () {
  if (window.pageYOffset > currStickyPos) {
    stickyElem.style.position = 'fixed';
    stickyElem.style.top = '0px';
  } else {
    stickyElem.style.position = 'relative';
    stickyElem.style.top = 'initial';
  }
};
