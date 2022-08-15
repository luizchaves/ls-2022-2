function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 2, 3));

function sumValues(...values) {
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

console.log(sumValues(1, 2));
console.log(sumValues(1));
console.log(sumValues(1, 2, 3));
console.log(sumValues(1, 2, 3, 4, 5));
