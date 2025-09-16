const fibs = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.slice(0, n);
};

const fibsRec = (n, arr = [0, 1]) => {
  if (arr.length >= n) return arr.slice(0, n);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n, arr);
};
