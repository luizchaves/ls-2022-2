function loop() {
  let resultado = '';

  for (let x = 0; x < 100; x++) {
    if (x < 10) {
      resultado += '0' + x;
    } else {
      resultado += x;
    }
    if (x % 10 === 9) {
      resultado += '\n';
    } else {
      resultado += ', ';
    }
  }

  return resultado;
}

function loopEven() {
  let resultado = '';

  for (let x = 0; x < 100; x += 2) {
    if (x < 10) {
      resultado += '0' + x;
    } else {
      resultado += x;
    }
    if (x % 10 === 8) {
      resultado += '\n';
    } else {
      resultado += ', ';
    }
  }

  return resultado;
}

function loopReverse() {
  let resultado = '';

  for (let x = 98; x >= 0; x -= 2) {
    resultado += (x < 10 ? '0' : '') + x;
    // if (x % 10 === 0) {
    //   resultado += '\n';
    // } else {
    //   resultado += ', ';
    // }
    resultado += x % 10 === 0 ? '\n' : ', ';
  }

  return resultado;
}

// console.log(loop());
// console.log(loopEven());
console.log(loopReverse());
