function solution(skill, skill_trees) {
  /*
        loop start
        2중 루프
        바깥 포문은 skill 기준
        내부 포문은 skill_trees 기준
        
        skill 각 요소를 기준으로, 각 skill_trees의 해당 skill 요소 위치를 찾아서 빈 배열에 담는다.
        loop end
        
        loop start
        배열을 다시 탐색하여 각 요소의 idx 순서가 오름차순이면 통과(counting)
        그렇지 않으면, 미통과
        loop end
        
        return cnt;
        종료
    */
  let arr = new Array(skill_trees.length).fill("");

  for (let y = 0; y < skill.length; y++) {
    for (let x = 0; x < skill_trees.length; x++) {
      let elementIdx = skill_trees[x].indexOf(skill[y]);

      if (elementIdx > -1) {
        arr[x] += elementIdx;
      } else {
        arr[x] += "x";
      }
    }
  }
  console.log(arr);

  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;

    if (arr[i].length !== skill.length) {
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > arr[i][j + 1]) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        cnt += 1;
      }
    }
  }

  return cnt;
}
