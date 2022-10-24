window.getCepInfo = getCepInfo;

async function getCepInfo() {
  cep.classList.remove('is-invalid');

  const cepValue = cep.value;

  cep.setCustomValidity('');

  if (cepValue.length >= 8) {
    const url = `https://viacep.com.br/ws/${cepValue}/json/`;

    try {
      const response = await fetch(url);

      const result = await response.json();

      if (result.erro) {
        throw new Error('Invalid CEP');
      }

      if (result.logradouro) {
        street.value = result.logradouro;
      }
    } catch (error) {
      const message = 'CEP inconsistente';

      cep.setCustomValidity(message);

      invalidCepFeedback.innerText = message;

      cep.classList.add('is-invalid');
    }
  } else {
    form.reset();

    cep.value = cepValue;
  }
}
