const menu = document.getElementById('menu');
const orderTotalEl = document.getElementById('orderTotal');

const quantities = {};

const formatMoney = (amount) => `$${amount.toFixed(2)}`;

const updateTotal = () => {
  const rows = menu.querySelectorAll('.menu__row');
  let total = 0;
  const price = parseFloat(menu.querySelector('.menu__row').dataset.price);
  rows.forEach((row) => {
    const id = row.dataset.dishId;
    const qty = quantities[id] || 0;
    total += price * qty;
  });
  orderTotalEl.textContent = formatMoney(total);
};

menu.addEventListener('click', (event) => {
  const button = event.target;
  if (button.className !== 'stepper__btn') {
    return;
  }

  const row = button.parentElement.parentElement;
  const id = row.dataset.dishId;
  const action = button.dataset.action;

  const current = quantities[id] || 0;
  if (action === 'increment') {
    quantities[id] = current + 1;
  } else if (action === 'decrement') {
    quantities[id] = current - 1;
  }

  const qtyEl = row.querySelector('[data-qty]');
  qtyEl.textContent = quantities[id];

  updateTotal();
});