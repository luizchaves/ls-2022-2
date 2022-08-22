const numbers = [];

numbers[0] = 10;
numbers[1] = 20;

console.log(numbers);

console.log(numbers[1]);

const letters = ['a', 'b', 'c'];

console.log(letters);

// Alice 1010
// Bob 2020
const students = [
  ['Alice', 1010],
  ['Bob', 2020],
];

console.log(students[1][1]);

const newStudentsCopy = [...students, ['Charles', 3030]];

console.log(newStudentsCopy[0]);

const newStudentsMatrix = [students, ['Charles', 3030]];
console.log(newStudentsMatrix[0]);

const values = [1, 10, 100];

console.log(values.length);

values.push(1000);

console.log(values);

values.unshift(0);

console.log(values);

values.reverse();

console.log(values);

values.push(50);

values.push(500);

console.log(values);

values.sort();

console.log(values);

values.sort((a, b) => a - b);

console.log(values);
