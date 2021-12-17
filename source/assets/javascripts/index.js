import 'bootstrap';

const form = document.querySelector('.form');

const formSubmit = (event) => {
  event.preventDefault();
  form.submit();
  form.reset();
};

form.addEventListener('submit', formSubmit);


// view more
const button = document.querySelector('#myBtn');
let state = false;
const moreTextOne = document.getElementById("one");
const moreTextTwo = document.getElementById("two");

function myFunction() {
  if (moreTextTwo.style.display === "none") {
    moreTextTwo.style.display = "inline";
    button.innerHTML = "Read more";
  }

  if (moreTextOne.style.display === "none") {
    moreTextOne.style.display = "inline";
    button.innerHTML = "Read more";
  } else {
    moreTextTwo.style.display = "none";
    button.innerHTML = "Read less";
    moreTextTwo.style.display = "inline";
  }
}
function hide() {
  if (moreTextTwo.style.display === "inline") {
    moreTextTwo.style.display = "none";
    button.innerHTML = "Read more";
  }
  if (moreTextOne.style.display === "inline") {
    moreTextOne.style.display = "none";
    button.innerHTML = "Read more";
}
}
function displayHide() {
  if (state === false) {
    myFunction();
    state = true;
  }
  else if (state === true) {
    hide();
    state = false;
  }
}

button.addEventListener('click', displayHide);
