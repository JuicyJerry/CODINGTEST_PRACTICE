function solution(priorities, location) {
  /*
        J = 가장 앞에 있는 문서(j) 
        if (나머지 요소 중 J보다 큰 문서가 있다면) J는 배열의 마지막으로 이동
        else location의 위치
    */

  let answer = 1;
  let target_idx = location;

  while (1) {
    let J = priorities.shift();
    let maxRestOfElements = Math.max(...priorities);

    if (maxRestOfElements > J) priorities.push(J);
    else {
      if (target_idx === 0) break;
      else answer++;
    }

    if (target_idx === 0) target_idx = priorities.length - 1;
    else target_idx--;
  }
  return answer;
}
