function camelCase(word) {
  if (word.length === 1) {
    return word.slice(0, 1).toUpperCase();
  } else if (word.length > 1) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  } else {
    return word;
  }
}

function formatter(text, action) {
  switch (action) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'camelcase':
      return text.split(' ').map(camelCase).join(' ');
    case 'snakecase':
      return text
        .split(' ')
        .map((word) => word.toLowerCase())
        .join('_');
    case 'reverse':
      return text.split('').reverse().join('');
    case 'countchar':
      return text.length;
    case 'countword':
      // return text.split(/\s/g).length;
      return text.split(' ').length + text.split('\n').length - 1;
    case 'countline':
      return text.split('\n').length;
  }
}

console.log(formatter('lorem ipsum dolor', 'uppercase')); //=> 'LOREM IPSUM DOLOR'
console.log(formatter('LOREM IPSUM DOLOR', 'lowercase')); //=> 'lorem ipsum dolor'
console.log(formatter('LOREM IPSUM DOLOR', 'camelcase')); //=> 'Lorem Ipsum Dolor'
console.log(formatter('lorem ipsum dolor', 'snakecase')); //=> 'lorem_ipsum_dolor'
console.log(formatter('lorem ipsum dolor', 'reverse')); //=> 'rolod muspi merol'
console.log(formatter('lorem\nipsum dolor', 'countchar')); //=> 17
console.log(formatter('lorem\nipsum dolor', 'countword')); //=> 3
console.log(formatter('lorem\nipsum dolor', 'countline')); //=> 2
