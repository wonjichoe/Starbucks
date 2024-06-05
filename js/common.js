// HEADER
const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInput.focus();
});

searchInput.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});
searchInput.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});

// FOOTER
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //2024