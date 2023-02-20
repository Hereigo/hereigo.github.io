const mySearch = document.querySelector('button[type="submit"]');
const mySearchField = document.querySelector('input[type="search"]');
mySearch.addEventListener('click', function () {
  const letters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї', 'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
  let serachWords = mySearchField.value.toLowerCase().trim().replaceAll(' ', '+');
  let serachReq = 'https://www.google.com.ua/search?q=' + serachWords +
      ((letters.some(l => serachWords.includes(l))) ? '+.ua' : '');
  window.open(serachReq);
});
mySearchField.focus();