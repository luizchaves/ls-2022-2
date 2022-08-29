function createList(length, text = 'Text') {
  let list = '<ul>\n';

  for (let x = 1; x < length; x++) {
    list += `  <li>${text} ${x}</li>\n`;
  }

  list += '</ul>';

  return list;
}

console.log(createList(3));
console.log(createList(5, 'Item'));
