export const addCounter = (array) => {
  let arr = [];
  let sum = 0;
  for (let item of array) {
    arr.push(item.count);
    sum = arr.reduce((sum, counter) => sum + counter, 0);
  }
  return sum;
};

export const priceCounter = (items) => {
  let arr = [];
  let sumValue = 0;
  for (let item of items) {
    arr.push(item.count * item.price);
    sumValue = arr.reduce((sum, counter) => sum + counter, 0);
  }
  return +sumValue.toFixed(2);
};
