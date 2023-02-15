let arr = [];
let sumValue = [];

export const addCounter = (counter) => {
  arr.push(counter);
  let sum = 0;
  sum = arr.reduce((sum, counter) => sum + counter, 0);
  document.getElementById("sum").innerHTML = sum;
  return sum;
};

export const priceCounter = (value) => {
  sumValue.push(value);
  let sum = sumValue.reduce((sum, value) => sum + value, 0);
  document.getElementById("sumValue").innerHTML = sum;
  return sum;
};

export const cartReset = () => {
  arr = [];
  sumValue = [];
};
