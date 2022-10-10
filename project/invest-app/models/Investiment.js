function load(investments) {
  localStorage.setItem(
    'investments-app:investments',
    JSON.stringify(investments)
  );

  return investments;
}

function create(investment) {
  const investments = readAll();

  const newinvestments = [...investments, investment];

  load(newinvestments);

  return investment;
}

function readAll() {
  return JSON.parse(localStorage.getItem('investments-app:investments'));
}

function read(id) {
  const investments = readAll();

  const investment = investments.find((investment) => investment.id === id);

  return investment;
}

function update(id, investment) {
  const investments = readAll();

  const index = investments.findIndex((investment) => investment.id === id);

  if (index >= 0) {
    investments[index] = { id, ...investment };
  }

  load(investments);

  return investment;
}

function destroy(id) {
  const investments = readAll();

  const index = investments.findIndex((investment) => investment.id === id);

  if (index >= 0) {
    investments.splice(index, 1);
  }

  load(investments);
}

export default { load, create, readAll, read, update, destroy };
