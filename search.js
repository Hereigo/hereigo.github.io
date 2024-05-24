"use strict";
// when "use strict";
// num = 123; - ReferenceError: assignment to undeclared variable num

const mySearch = document.querySelector('input[type="submit"]');
const mySearchField = document.querySelector('input[type="search"]');

mySearch.addEventListener('click', function () {
  let searchWords = mySearchField.value.toLowerCase().trim().replaceAll(' ', '+');
  let searchReq = 'https://www.google.com/search?q=' + searchWords + '+-.ru+&client=firefox-b-d';
  window.open(searchReq);
});

mySearchField.focus();