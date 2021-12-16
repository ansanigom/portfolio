import 'bootstrap';

const form = document.querySelector('.form');

const formSubmit = (event) => {
  event.preventDefault();
  form.submit();
  form.reset();
};

form.addEventListener('submit', formSubmit);


// view more
function myFunction() {
  const moreTextOne = document.getElementById("one");
  const moreTextTwo = document.getElementById("two");
  const btnText = document.getElementById("myBtn");

  if (moreTextTwo.style.display === "none") {
    moreTextTwo.style.display = "inline";
    btnText.innerHTML = "Read more";
  }

  if (moreTextOne.style.display === "none") {
    moreTextOne.style.display = "inline";
    btnText.innerHTML = "Read more";
  } else {
    moreTextTwo.style.display = "none";
    btnText.innerHTML = "Read less";
    moreTextTwo.style.display = "inline";
  }
}
