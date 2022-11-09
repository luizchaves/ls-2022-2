import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css';

import {
  investimentTypes,
  investimentCategories,
} from './data/investiments.js';

import Investiment from './models/Investiment.js';

window.handleSubmit = handleSubmit;
window.removeInvestimentRow = removeInvestimentRow;

const table = document.querySelector('tbody');

function formatDate(date) {
  date = new Date(date + 'T03:00:00');

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return date.toLocaleString('pt-BR', options);
}

function formatCurrency(value) {
  value = Number(value);

  const options = {
    style: 'currency',
    currency: 'BRL',
  };

  return value.toLocaleString('pt-br', options);
}

function insertInvestimentRow(investiment) {
  const view = `<tr id="investiment-${investiment.id}">
    <th scope="row">${investiment.id}</th>
    <td>${investiment.name}</td>
    <td>${investiment.type}</td>
    <td>${investiment.category}</td>
    <td>${investiment.interest}</td>
    <td>${formatDate(investiment.start)}</td>
    <td>${formatDate(investiment.end)}</td>
    <td>${formatCurrency(investiment.value)}</td>
    <td>
      <i class="fa-solid fa-trash-can" onclick="removeInvestimentRow(${
        investiment.id
      })"></i>
    </td>
  </tr>`;

  table.insertAdjacentHTML('afterbegin', view);
}

function removeInvestimentRow(id) {
  const confirmed = confirm('Deseja realmente excluir este investimento?');

  if (confirmed) {
    const row = document.querySelector(`#investiment-${id}`);

    row.remove();

    Investiment.destroy(id);
  }
}

function getNextInvestimentId() {
  const ids = investiments.map(({ id }) => id);

  return Math.max(...ids) + 1;
}

async function loadInvestiments() {
  const data = await Investiment.readAll();

  data.map((investiment) => insertInvestimentRow(investiment));
}

function loadInvestimentsTypes() {
  const typeContent = investimentTypes
    .sort()
    .map((type) => `<option>${type}</option>`)
    .join('');

  type.innerHTML = typeContent;
}

function loadInvestimentsCategories() {
  const categoryContent = investimentCategories
    .sort()
    .map((category) => `<option>${category}</option>`)
    .join('');

  category.innerHTML = categoryContent;
}

async function handleSubmit(event) {
  event.preventDefault();

  const investiment = Object.fromEntries(new FormData(createInvestimentForm));

  const newinvestiment = await Investiment.create(investiment);

  insertInvestimentRow(newinvestiment);

  createInvestimentForm.reset();
}

loadInvestiments();

loadInvestimentsTypes();

loadInvestimentsCategories();
