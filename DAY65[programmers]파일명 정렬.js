function solution(files) {
  let answer = [];
  let answerWrap = files.map((file, idx) => ({ file, idx }));
  console.log(answerWrap);

  let compare = (a, b) => {
    let regexNum = /[0-9]/g;

    let numIndexA = a.indexOf(a.match(regexNum)[0]);
    let numIndexB = b.indexOf(b.match(regexNum)[0]);

    let sortByHead = a
      .substring(0, numIndexA)
      .toLowerCase()
      .localeCompare(b.substring(0, numIndexB).toLowerCase());

    if (sortByHead === 0) {
      let subStrA = parseInt(a.substring(numIndexA));
      let subStrB = parseInt(b.substring(numIndexB));

      if (subStrA < subStrB) return -1;
      else if (subStrA > subStrA) return 1;
      else return 0;
    } else if (sortByHead === -1) return -1;
    else return 1;
  };

  answerWrap.sort((a, b) => {
    let result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  });
  return answerWrap.map((answer) => answer.file);
}
