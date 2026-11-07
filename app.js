(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal-form]"),
    closeModalBtn: document.querySelector("[data-close-modal-form]"),
    modal: document.querySelector("[data-modal-form]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

const button = document.getElementById('colorBtn');

button.addEventListener('click', function() {
  document.body.classList.toggle('dark-bg');
});

const minustBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const counterValue = document.getElementById('value');

let quantity = 1;

plusBtn.addEventListener('click', () => {
  quantity++;
  counterValue.textContent = quantity;
});

minustBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    counterValue.textContent = quantity;
  }
});

const commodity = document.getElementById('myBtn');
const targetContainer = document.getElementById('box-2');

commodity.addEventListener('click', () => {
  targetContainer.appendChild(commodity);
}, { once: true });