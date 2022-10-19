function sum(a, b) {
  return a + b;
}

console.log(sum(1, 1));

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject('Invalid sum');
    } else {
      resolve(a + b);
    }
  });
}

console.log(sumPromise(2, 2));

sumPromise(3, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

sumPromise('a', 2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(sum(4, 4));

sumPromise(5, 5)
  .then((result) => sumPromise(result, 6))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

async function sumAsync(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid sum');
  } else {
    return a + b;
  }
}

sumAsync(6, 6)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

sumAsync('a', 6)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

async function main() {
  try {
    const result1 = await sumAsync(7, 7);
    const result2 = await sumAsync(result1, 8);

    console.log(result2);
  } catch (error) {
    console.log(error.message);
  }
}

console.log(main());
