function solution(info, query) {
  let regExp = new RegExp(/ and /, "ig");

  for (let i = 0; i < query.length; i++) {
    query[i] = query[i].replace(regExp, ",");
    query[i] = query[i].replace(/\'/g, "");
    query[i] = query[i].replace(/ /g, ",");
    query[i] = query[i].split(",");
  }

  let ret = new Array(query.length).fill(0);
  searchInfo(info, query, ret);

  return ret;
}

function searchInfo(info, query, ret) {
  for (let i = 0; i < info.length; i++) {
    info[i] = info[i].split(" ");
    let language = new RegExp(`${info[i][0]}`, "ig");
    let position = new RegExp(`${info[i][1]}`, "ig");
    let experience = new RegExp(`${info[i][2]}`, "ig");
    let soulFood = new RegExp(`${info[i][3]}`, "ig");
    let score = parseInt(info[i][4]);

    for (let j = 0; j < query.length; j++) {
      // let cnt = 0;
      let searchLanguage = query[j].join(",").search(language);
      let searchPosition = query[j].join(",").search(position);
      let searchExperience = query[j].join(",").search(experience);
      let searchSoulFood = query[j].join(",").search(soulFood);
      let searchScore = score - parseInt(query[j][4]);

      for (let t = 0; t < query[0].length; t++) {
        if (query[j][t] === "-" && t === 0) searchLanguage = 1;
        if (query[j][t] === "-" && t === 1) searchPosition = 1;
        if (query[j][t] === "-" && t === 2) searchExperience = 1;
        if (query[j][t] === "-" && t === 3) searchSoulFood = 1;
        if (query[j][t] === "-" && t === 4) searchScore = 1;
      }

      if (
        searchLanguage > -1 &&
        searchPosition > -1 &&
        searchExperience > -1 &&
        searchSoulFood > -1 &&
        searchScore > -1
      )
        ret[j] += 1;
      continue;
    }
  }
  return ret;
}
