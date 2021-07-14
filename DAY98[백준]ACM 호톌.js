//! #1

/*
    방 번호: YXX / YYXX (Y || YY: 층 수, XX: 엘베부터 카운팅)
    걷는 거리가 같을 때, 아래층 방 선호
    모든 방이 비어있다고 가정
    
    N번째 도착 손님에게 배정될 방 번호 계산
    
    H: 6, W: 12
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [len, guest1Info, guest2Info] = input;
let [h1, w1, n1] = guest1Info.split(" ").map((el) => Number(el));
let [h2, w2, n2] = guest2Info.split(" ").map((el) => Number(el));
let room1, room2;
let cnt = 0;

for (let x = 1; x <= w1; x++) {
  for (let y = 1; y <= h1; y++) {
    cnt++;

    if (cnt === n1) {
      if (x < 2) {
        y = `0${y}`;
      } else if (x < 10) {
        x = `0${x}`;
      }
      room1 = `${y}${x}`;
    }
  }
}

cnt = 0;
for (let x = 1; x <= w1; x++) {
  for (let y = 1; y <= h1; y++) {
    cnt++;
    if (cnt === n2) {
      if (x < 2) {
        y = `0${y}`;
      } else if (x < 10) {
        x = `0${x}`;
      }
      room2 = `${y}${x}`;
    }
  }
}

console.log(room1);
console.log(room2);

//! #2
/*
    방 번호: YXX / YYXX (Y || YY: 층 수, XX: 엘베부터 카운팅)
    걷는 거리가 같을 때, 아래층 방 선호
    모든 방이 비어있다고 가정
    
    N번째 도착 손님에게 배정될 방 번호 계산
    
    H: 6, W: 12
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [len, guest1Info, guest2Info] = input;

for (let t = 0; t < len; t++) {
  let [h1, w1, n1] = guest1Info.split(" ").map((el) => Number(el));
  let [h2, w2, n2] = guest2Info.split(" ").map((el) => Number(el));
  let room1, room2;
  let cnt = 0;

  for (let x = 1; x <= w1; x++) {
    for (let y = 1; y <= h1; y++) {
      cnt++;

      if (cnt === n1) {
        if (x < 2) {
          y = `0${y}`;
        } else if (x < 10) {
          x = `0${x}`;
        }
        room1 = `${y}${x}`;
      }
    }
  }

  cnt = 0;
  for (let x = 1; x <= w1; x++) {
    for (let y = 1; y <= h1; y++) {
      cnt++;
      if (cnt === n2) {
        if (x < 2) {
          y = `0${y}`;
        } else if (x < 10) {
          x = `0${x}`;
        }
        room2 = `${y}${x}`;
      }
    }
  }

  console.log(room1);
  console.log(room2);
}
