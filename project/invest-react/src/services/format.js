export function formatDate(date) {
  date = new Date(date);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return date.toLocaleString('pt-BR', options);
}

export function formatCurrency(value) {
  value = Number(value);

  const options = {
    style: 'currency',
    currency: 'BRL',
  };

  return value.toLocaleString('pt-br', options);
}
