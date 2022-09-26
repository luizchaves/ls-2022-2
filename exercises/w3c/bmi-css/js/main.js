const imcStatus = {
  normalWeight: {
    label: 'Peso Normal',
    background: 'border border-sucess bg-success text-white',
  },
};

function handleSubmit(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(imcForm));

  const status = imc(data);

  const { label, background } = imcStatus[status];

  imcInput.value = label;

  imcInput.className = `form-control ${background}`;
}

function imc({ height, weight, sex }) {
  return 'normalWeight';
}
