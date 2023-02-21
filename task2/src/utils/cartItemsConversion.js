export const uniqItems = (arr) => {
  let result = [];
  for (let item of arr) {
    result.push([item[0], item[1], item[2]]);
  }
  let res = result.reduce(
    (res, cur) =>
      res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
        ? res
        : [...res, cur],
    []
  );
  result = [];
  for (let item of arr) {
    result.push([item[0], item[3]]);
  }
  let s = result.reduce((a, b) => ((a[b[0]] = (a[b[0]] || 0) + b[1]), a), {});
  for (let item of res) {
    for (let key in s) {
      if (item[0] === +key) {
        item.push(s[key]);
      }
    }
  }
  let state = [];
  for (let item of res) {
    item = { id: item[0], title: item[1], price: item[2], count: item[3] };
    state.push(item);
  }
  return state;
};
