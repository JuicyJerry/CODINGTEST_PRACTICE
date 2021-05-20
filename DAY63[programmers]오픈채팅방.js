function solution(record) {
  let obj = {};
  let newRecord = new Array(record.length).fill(null);

  record.map((el, idx) => {
    newRecord[idx] = el.split(" ");
  });

  for (let i = 0; i < newRecord.length; i++) {
    obj[newRecord[i][1]] = newRecord[i][2];
  }

  let ret = [];
  let enter = `님이 들어왔습니다.`;
  let exit = `님이 나갔습니다.`;
  for (let i = 0; i < newRecord.length; i++) {
    // console.log(newRecord[i][0]);

    if (newRecord[i][0] === "Enter") {
      ret.push(`${obj[newRecord[i][1]] + enter}`);
    } else if (newRecord[i][0] === "Leave") {
      ret.push(`${obj[newRecord[i][1]] + exit}`);
    } else if (newRecord[i][0] === "Change") {
      obj[newRecord[i][1]] = newRecord[i][2];
    }
  }

  return ret;
  // console.log(`obj: `, obj);
  // console.log(`ret: `, ret);
}
