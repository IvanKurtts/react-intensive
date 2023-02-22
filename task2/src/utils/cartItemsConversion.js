export const uniqItems = (arr) => {
  let result = [];
  for (let item of arr) {
    result.push([item.id, item.title, item.price]);
  }
  let elements = result.reduce(
    (res, cur) =>
      res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
        ? res
        : [...res, cur],
    []
  );
  result = [];
  for (let item of arr) {
    result.push([item.id, item.counter]);
  }
  let sumCounter = result.reduce(
    (sum, res) => ((sum[res[0]] = (sum[res[0]] || 0) + res[1]), sum),
    {}
  );
  for (let item of elements) {
    for (let key in sumCounter) {
      if (item[0] === +key) {
        item.push(sumCounter[key]);
      }
    }
  }
  let state = [];
  for (let item of elements) {
    item = { id: item[0], title: item[1], price: item[2], count: item[3] };
    state.push(item);
  }
  return state;
};
