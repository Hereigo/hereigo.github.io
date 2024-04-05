"use strict";

// num = 123; - ReferenceError: assignment to undeclared variable num ("use strict";)

const mySearch = document.querySelector('input[type="submit"]');
const mySearchField = document.querySelector('input[type="search"]');

mySearch.addEventListener('click', function () {
  let serachWords = mySearchField.value.toLowerCase().trim().replaceAll(' ', '+');
  let serachReq = 'https://www.qwant.com/?hc=0&hti=0&locale=en_GB&q=' + serachWords + '+.ua+-.ru&t=web'
  // 'https://www.google.com.ua/search?q=' + serachWords + ' -.ru';
  window.open(serachReq);
});

mySearchField.focus();