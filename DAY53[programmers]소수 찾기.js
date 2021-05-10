function solution(n) {
  let arr = new Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  arr.splice(0, 2, false, false);
  const result = arr.filter((value) => {
    return value !== false;
  });
  return result.length;
}
