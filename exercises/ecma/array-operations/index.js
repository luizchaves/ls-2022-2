function sum(...values) {
  return values.reduce((a, b) => a + b);
}

function sumOdds(...values) {
  return values.filter((x) => x & 1).reduce((a, b) => a + b, 0);
}

function product(...values) {
  return values.reduce((a, b) => a * b);
}

console.log(sum(1, 2, 3)); //=> 6
console.log(sum(2, 2, 2)); //=> 6
console.log(sum(1, 2, 3, 4, 5, 6)); //=> 21
console.log(sumOdds(1, 2, 3)); //=> 4
console.log(sumOdds(2, 2, 2)); //=> 0
console.log(sumOdds(1, 2, 3, 4, 5, 6)); //=> 9
console.log(product(1, 2, 3)); //=> 6
console.log(product(2, 2, 2)); //=> 8
console.log(product(1, 2, 3, 4, 5, 6)); //=> 720
