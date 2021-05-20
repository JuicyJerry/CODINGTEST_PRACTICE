function solution(record) {
  let obj = {};
  let newRecord = record.map((el) => el.split(" "));

  for (let i = 0; i < newRecord.length; i++) {
    if (newRecord[i].length === 3) {
      // 이걸 추가하고 통과 : leave에는 [2]가 없다
      obj[newRecord[i][1]] = newRecord[i][2];
    }
  }

  let ret = [];
  // let enter = ``;
  // let exit = ``;
  for (let i = 0; i < newRecord.length; i++) {
    if (newRecord[i][0] === "Enter") {
      ret.push(obj[newRecord[i][1]] + "님이 들어왔습니다.");
    } else if (newRecord[i][0] === "Leave") {
      ret.push(obj[newRecord[i][1]] + "님이 나갔습니다.");
    }
  }
  return ret;
}
