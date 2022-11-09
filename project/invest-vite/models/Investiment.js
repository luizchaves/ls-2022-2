const domain = 'http://localhost:3000';

async function create(investment) {
  const url = `${domain}/investiments`;

  const config = {
    method: 'post',
    body: JSON.stringify(investment),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, config);

  const investiment = response.json();

  return investiment;
}

async function readAll() {
  const url = `${domain}/investiments`;

  const response = await fetch(url);

  const investiments = response.json();

  return investiments;
}

async function read(id) {
  const url = `${domain}/investiments/${id}`;

  const response = await fetch(url);

  const investiments = response.json();

  return investiments;
}

async function update(id, investment) {
  const url = `${domain}/investiments/${id}`;

  const config = {
    method: 'put',
    body: JSON.stringify(investment),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, config);

  const investiment = response.json();

  return investiment;
}

async function destroy(id) {
  const url = `${domain}/investiments/${id}`;

  const config = {
    method: 'delete',
  };

  const response = await fetch(url, config);

  return response.ok;
}

export default { create, readAll, read, update, destroy };
