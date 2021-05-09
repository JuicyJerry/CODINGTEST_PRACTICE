function solution(s) {
  s = s.replace(/{/g, "[").replace(/}/g, "]");
  s = JSON.parse(s)
    .sort((a, b) => a.length - b.length)
    .flat();
  return [...new Set(s)];
}
