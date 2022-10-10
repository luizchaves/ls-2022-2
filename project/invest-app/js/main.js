import {
  investiments,
  investimentTypes,
  investimentCategories,
} from '../data/investiments.js';

import Investiment from '../models/Investiment.js';

window.handleSubmit = handleSubmit;

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
  const view = `<tr>
    <th scope="row">${investiment.id}</th>
    <td>${investiment.name}</td>
    <td>${investiment.type}</td>
    <td>${investiment.category}</td>
    <td>${investiment.interest}</td>
    <td>${formatDate(investiment.start)}</td>
    <td>${formatDate(investiment.end)}</td>
    <td>${formatCurrency(investiment.value)}</td>
  </tr>`;

  table.insertAdjacentHTML('afterbegin', view);
}

function getNextInvestimentId() {
  const ids = investiments.map(({ id }) => id);

  return Math.max(...ids) + 1;
}

function loadInvestiments() {
  const data = Investiment.readAll() ?? Investiment.load(investiments);

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

function handleSubmit(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(createInvestimentForm));

  const newinvestiment = { ...data, id: getNextInvestimentId() };

  insertInvestimentRow(newinvestiment);

  Investiment.create(newinvestiment);

  createInvestimentForm.reset();
}

loadInvestiments();

loadInvestimentsTypes();

loadInvestimentsCategories();
