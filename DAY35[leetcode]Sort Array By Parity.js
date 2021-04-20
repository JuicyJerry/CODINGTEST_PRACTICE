var sortArrayByParity = function (A) {
  let r = [];
  let i = 0;

  while (A.length - 1 >= i) {
    if (A[i] % 2 === 0) {
      r.unshift(A[i]);
    } else {
      r.push(A[i]);
    }
    i++;
  }
  return r;
};
