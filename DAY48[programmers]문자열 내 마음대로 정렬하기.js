// # 통과 못 함
function solution(strings, n) {
  let c = strings.map((e) => {
    for (let i = 0; i < n; i++) {
      console.log(e.slice(0, n));
    }
  });
  console.log(c);
}
