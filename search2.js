"use strict";

// num = 123; - ReferenceError: assignment to undeclared variable num ("use strict";)

const mySearch = document.querySelector('.header>button');

console.log('A - ', mySearch)

const mySearchField = document.querySelector('.header>input[type="text"]');

console.log('Arr - ', mySearchField)

mySearch.addEventListener('click', function () {
  let searchWords = mySearchField.value.toLowerCase().trim().replaceAll(' ', '+');
  let searchReq = 'https://www.google.com/search?q=' + searchWords + '+-.ru+&client=firefox-b-d';
  window.open(searchReq);
});

mySearchField.focus();