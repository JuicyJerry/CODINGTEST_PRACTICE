function solution(info, query) {
  let regExp = new RegExp(/ and /, "ig");

  for (let i = 0; i < query.length; i++) {
    query[i] = query[i].replace(regExp, ",");
    query[i] = query[i].replace(/\'/g, "");
    query[i] = query[i].replace(/ /g, ",");
    query[i] = query[i].split(",");
  }

  let ret = [];
  for (let i = 0; i < info.length; i++) {
    let language = new RegExp(`${info[i][0]}`, "ig");
    let position = new RegExp(`${info[i][1]}`, "ig");
    let experience = new RegExp(`${info[i][2]}`, "ig");
    let soulFood = new RegExp(`${info[i][3]}`, "ig");
    let score = info[i][4];
    let cnt = 0;

    for (let j = 0; j < query.length; j++) {
      console.log(info[i]);
      console.log(query[i].join(",").search(language), language);
      console.log(query[i].join(",").search(position), position);
      console.log(query[i].join(",").search(experience), experience);
      console.log(query[i].join(",").search(soulFood), soulFood);

      // console.log(info[i].split(' '))
      console.log(query[i][4], score, query[i][4] >= score);
      // console.log(info[i].search(language), info[i].search(position), info[i].search(experience), info[i].search(soulFood), parseInt(info[i]) >= score)

      if (
        query[i].search(language) >= -1 &&
        query[i].search(position) >= -1 &&
        query[i].search(experience) >= -1 &&
        query[i].search(soulFood) >= -1 &&
        query[i].split(" ")[4] >= score
      ) {
        cnt++;
      }
    }
    ret.push(cnt);
  }

  return ret;
}
