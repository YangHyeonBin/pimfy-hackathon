const $searchContainer = document.querySelectorAll('.input-box');
const $searchInput = document.querySelectorAll('.input-box input');

const inputFocusHandler = () => {
  $searchContainer[0].classList.add('focus');
};

const inputFocusHandler2 = () => {
  $searchContainer[1].classList.add('focus');
};

const inputFocusHandler3 = () => {
  $searchContainer[2].classList.add('focus');
};

const inputBlurHandler = () => {
  $searchContainer[0].classList.remove('focus');
};

const inputBlurHandler2 = () => {
  $searchContainer[1].classList.remove('focus');
};

const inputBlurHandler3 = () => {
  $searchContainer[2].classList.remove('focus');
};

$searchInput[0].addEventListener('focus', inputFocusHandler);
$searchInput[0].addEventListener('blur', inputBlurHandler);

$searchInput[1].addEventListener('focus', inputFocusHandler2);
$searchInput[1].addEventListener('blur', inputBlurHandler2);

$searchInput[2].addEventListener('focus', inputFocusHandler3);
$searchInput[2].addEventListener('blur', inputBlurHandler3);
