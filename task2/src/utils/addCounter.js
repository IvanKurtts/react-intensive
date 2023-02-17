let arr = [];
let sumValue = [];

export const addCounter = (counter) => {
  arr.push(counter);
  let sum = 0;
  sum = arr.reduce((sum, counter) => sum + counter, 0);
  return sum;
};

export const priceCounter = (value) => {
  sumValue.push(value);
  let sum = sumValue.reduce((sum, value) => sum + value, 0);
  return +sum.toFixed(2);
};

export const cartReset = () => {
  arr = [];
  sumValue = [];
};
