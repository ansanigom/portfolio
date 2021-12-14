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
const currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function () {
  if (window.pageYOffset > currStickyPos) {
    stickyElem.style.position = 'fixed';
    stickyElem.style.top = '0px';
    stickyElem.style.backgroundColor = 'rgb(43, 43, 43)';
  } else {
    stickyElem.style.position = 'relative';
    stickyElem.style.top = 'initial';
    stickyElem.style.backgroundColor = '#ebebeb';
  }
};

// view more


// 表示させる要素の総数をlengthメソッドで取得
const numberListLen = (data.products).length;
// デフォルトの表示数
const defaultNum = 3;
// ボタンクリックで追加表示させる数
const addNum = 3;
// 現在の表示数
let currentNum = 0;

(data.products).each(function () {
  // moreボタンを表示し、closeボタンを隠す
  (this).find('#more_btn').show();
  (this).find('#close_btn').hide();

  // defaultNumの数だけ要素を表示
  // defaultNumよりインデックスが大きい要素は隠す
  (this).find('li:not(:lt(" + defaultNum + "))').hide();

  // 初期表示ではデフォルト値が現在の表示数となる
  currentNum = defaultNum;

  // moreボタンがクリックされた時の処理
  ('#more_btn').click(function () {
    // 現在の表示数に追加表示数を加えていく
    currentNum += addNum;

    // 現在の表示数に追加表示数を加えた数の要素を表示する
    (this).parent().find(data.products(' + currentNum + ')).slideDown();

    // 表示数の総数よりcurrentNumが多い=全て表示された時の処理
    if (numberListLen <= currentNum) {
      // 現在の表示数をデフォルト表示数へ戻す
      currentNum = defaultNum;
      // インデックス用の値をセット
      const indexNum = currentNum - 1;

      // moreボタンを隠し、closeボタンを表示する
      ('#more_btn').hide();
      ('#close_btn').show();

      // closeボタンがクリックされた時の処理
      ('#close_btn').click(function () {
        // デフォルト数以降=インデックスがindexNumより多い要素は非表示にする
        (this).parent().find(data.products(' + indexNum + ')).slideUp();

        // closeボタンを隠し、moreボタンを表示する
        (this).hide();
        ('#more-btn').show();
      });
    }
  });
});
