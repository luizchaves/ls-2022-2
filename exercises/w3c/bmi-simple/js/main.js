function handleSubmit(event) {
  event.preventDefault();

  // const height = document.querySelector('[name=height]');
  // const height = document.querySelector('#height');
  // height.value
  // const [height, weight, , , imcStatus] = document.querySelectorAll('input');
  // const sex = document.querySelector('input:check')

  const data = Object.fromEntries(new FormData(imcForm));

  imcStatus.value = imc(data);
}

function imc({ height, weight, sex }) {
  return 'Peso Normal';
}
