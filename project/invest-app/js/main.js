import { investments } from '../data/investments.js';

const table = document.querySelector('tbody');

function insertInvestmentRow(investment) {
  const view = `<tr>
    <th scope="row">${investment.id}</th>
    <td>${investment.name}</td>
    <td>${investment.type}</td>
    <td>${investment.category}</td>
    <td>${investment.interest}</td>
    <td>${investment.start}</td>
    <td>${investment.end}</td>
    <td>${investment.value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })}</td>
  </tr>`;

  table.insertAdjacentHTML('afterbegin', view);
}

function loadInvestments(investments) {
  investments.map((investment) => insertInvestmentRow(investment));
}

loadInvestments(investments);
