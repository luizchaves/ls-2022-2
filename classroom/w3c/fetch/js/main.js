async function getInfoCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(url);

  const info = await response.json();

  return info;
}

// await top level
const cep = await getInfoCep('58015435');

console.log('Cidade', cep.localidade);
