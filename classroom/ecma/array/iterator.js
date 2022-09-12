const numbers = [1, 2, 3];

// map
// const doubleNumbers = [];

// for (const number of numbers) {
//   doubleNumbers.push(number * 2);
// }

// [1, 2, 3]
// (number) => number * 2
// f(x) = 2x
// [2, 4, 6]

const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);

// filter
// [1, 2, 3]
// f(x) = x & 1 | true or false
// (number) => Boolean(number & 1)
// [1, 3]

const oddNumbers = numbers.filter((number) => number & 1);

console.log(oddNumbers);

// reduce
// [1, 2, 3]
// f(x,y) = x + y
// (acc, val) => acc + val
// 6

// acc | val
// 1   | 2
// 3   | 3
// 6

const sum = numbers.reduce((acc, val) => acc + val);

console.log(sum);

// acc | val
// 0   | 1
// 1   | 2
// 3   | 3
// 6

const sumStartZero = numbers.reduce((acc, val) => acc + val, 0);

// find

const value = numbers.find((number) => number === 2);

console.log(value);

// findIndex

const index = numbers.findIndex((number) => number === 2);

console.log(index);

// forEach
numbers.forEach((number, index) => {
  if (index & 1) {
    console.log(number + 1);
  }
});
