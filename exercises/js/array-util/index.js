function min(...values) {
  return Math.min(...values);
}

function max(...values) {
  // let maxValue = values[0];

  // for (const value of values) {
  //   if (value > maxValue) {
  //     maxValue = value;
  //   }
  // }

  // return maxValue;
  return Math.max(...values);
}

console.log(min(1, 4, 2, 6, 10, 3)); //=> 1
console.log(min(1, 4, -1, 6, 10, 3)); //=> -1
console.log(max(1, 4, 2, 6, 10, 3)); //=> 10
