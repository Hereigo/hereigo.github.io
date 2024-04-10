"use strict";

// num = 123; - ReferenceError: assignment to undeclared variable num ("use strict";)

const mySearch = document.querySelector('input[type="submit"]');
const mySearchField = document.querySelector('input[type="search"]');
mySearch.addEventListener('click', function () {
  let serachWords = mySearchField.value.toLowerCase().trim().replaceAll(' ', '+');
  let serachReq = 'https://www.google.com/search?q=' + serachWords + '+-.ru+.ua&client=firefox-b-d';
  window.open(serachReq);
});

mySearchField.focus();