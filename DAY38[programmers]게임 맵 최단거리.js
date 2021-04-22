function solution(maps) {
  let xpos = [0, 0, 1, -1];
  let ypos = [1, -1, 0, 0];
  let ans = -1;
  const q = [[0, 0, 1]]; // yy, xx, cnt, 현재 위치와 이동횟수

  // bfs - 최단거리
  while (q.length != 0) {
    let y = q[0][0];
    let x = q[0][1];
    let cnt = q[0][2];
    q.shift();

    // y, x가 타깃에 도착할 경우
    if (y === map.length - 1 || x === map.length - 1) {
      ans = cnt;
      break;
    }

    for (let i = 0; i < 4; i++) {
      // i가 증가할 때마다, 사분면 위치 달라짐(아래, 위, 오른쪽, 왼쪽)
      let yy = y + ypos[i];
      let xx = x + xpos[i];

      // xx, yy가 맵을 벗어났을 경우
      if (xx < 0 || yy < 0 || xx >= map[0].length || yy >= maps.length)
        continue;

      if (maps[yy][xx] === 2) continue; // 방문 했던 곳일 경우
      if (maps[yy][xx] === 0) continue; // 벽인 경우

      maps[yy][xx] = 2; // 방문 했다고 마킹
      q.push([yy, xx, cnt + 1]); // 방문 해야하는 위치와 카운트 값 업데이트!
    }
  }
  return ans;
}
