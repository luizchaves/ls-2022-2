function createList(length, text = 'Text') {
  let list = '';

  for (let x = 1; x <= length; x++) {
    list += `  <li>${text} ${x}</li>\n`;
  }

  return list;
}

// const form = document.querySelector('form');

// form.onsubmit = (event) => {
//   event.preventDefault();

//   console.log('Submit');
// };

function handleSubmit(event) {
  event.preventDefault();

  const ul = document.querySelector('ul');
  const count = Number(document.querySelector('input[name=count]').value);

  ul.innerHTML = createList(count);
}
