const $openButton = document.querySelector('.options');
const $modal = document.querySelector('.modal');
const $closeButton = document.querySelector('.close');
const $modalOverlay = document.querySelector('.modal-overlay');

function openModal() {
  $modal.classList.remove('hidden');
}
const closeModal = () => {
  $modal.classList.add('hidden');
};

$openButton.addEventListener('click', openModal);
$closeButton.addEventListener('click', closeModal);
$modalOverlay.addEventListener('click', closeModal);
