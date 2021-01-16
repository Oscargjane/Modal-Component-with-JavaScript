'use strict';

import '../scss/main.scss';

const modalContainer = document.querySelector('.modal-container--js');
const btnsShowModal = Array.from(
  document.querySelectorAll('.btn-show-modal--js')
);

function openModalWindow() {
  const sizeModal = this.dataset.size;
  const markup = `
    <div class="modal modal--${sizeModal}">
        <h3 class="modal__title">Modal Title</h3>
        <p class="modal__text">
            Working hard will take you to the top, enjoying the road will take you
            further !!
        </p>
        <div class="btn-box">
            <button type="button" class="btn-close-modal">close</button>
            <button type="button" class="btn-save-modal">save changes</button>
        </div>
    </div>
    `;

  modalContainer.classList.remove('modal-container--hidden');
  modalContainer.innerHTML = markup;
}

const closeModalWindow = () =>
  modalContainer.classList.add('modal-container--hidden');

// Event Listener
btnsShowModal.forEach((btn) => btn.addEventListener('click', openModalWindow));

modalContainer.addEventListener('click', (e) => {
  const target = e.target.matches('.modal-container--js, .btn-close-modal');
  if (target) return closeModalWindow();
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'Escape') return closeModalWindow();
});
