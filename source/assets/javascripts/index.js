import 'bootstrap';

const form = document.querySelector('.form');

const formSubmit = (event) => {
  event.preventDefault();
  form.submit();
  form.reset();
};

form.addEventListener('submit', formSubmit);


// view more


const numberListLen = (data.products).length;
const defaultNum = 3;
const addNum = 3;
let currentNum = 0;

(data.products).each(function () {
  (this).find('#more_btn').show();
  (this).find('#close_btn').hide();

  (this).find('li:not(:lt(" + defaultNum + "))').hide();

  currentNum = defaultNum;

  ('#more_btn').click(function () {
    currentNum += addNum;

    (this).parent().find(data.products(' + currentNum + ')).slideDown();

    if (numberListLen <= currentNum) {
      currentNum = defaultNum;
      const indexNum = currentNum - 1;

      ('#more_btn').hide();
      ('#close_btn').show();

      ('#close_btn').click(function () {
        (this).parent().find(data.products(' + indexNum + ')).slideUp();

        (this).hide();
        ('#more-btn').show();
      });
    }
  });
});
