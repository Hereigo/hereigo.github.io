const mySearch = document.querySelector('input[type="submit"]');
const mySearchField = document.querySelector('input[type="search"]');

mySearch.addEventListener('click', function () {
  let serachWords = mySearchField.value.toLowerCase().trim().replaceAll(' ', '+');
  let serachReq = 'https://www.google.com.ua/search?q=' + serachWords + ' ua -.ru -/ru. -/ru/';
  window.open(serachReq);
});

mySearchField.focus();