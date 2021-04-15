function solution(record) {
  let answer = [];
  let obj = {};
  console.log(record);
  console.log(record[0]);

  let records = record.map((str) => split(","));
  // var newArr = record.map(str => str.split(" "));
  var newArr = record.map((str) => str.split(","));

  console.log(newArr);

  for (let y = 0; y < record.length; y++) {
    if (record[y][0] === "Enter" && !obj(record[y][0])) {
      obj[record[y][1]] = record[y][2];
      obj[idx] = y;
      answer.push(`${record[y][2]}님 들어왔습니다.`);
    }
    if (record[y][0] === "Leave") {
      answer.push(`${record[y][2]}님 나갔습니다.`);
      obj[idx] = y;
    }

    if (record[y][0] === "Change") {
      changeName(obj[record[y][1]], record[y][2]);
    }
  }

  return answer;
}

function changeName(id, name) {
  for (let y = 0; y < obj[id].length; y++) {
    if (answer[y].include(`${id}`) === obj[id]) {
      answer[y].replace(id, name);
    }
  }
  return;
}
