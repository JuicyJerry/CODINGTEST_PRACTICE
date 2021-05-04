function solution(m, musicinfos) {
  // musicinfos: 음악 제목, 재생이 시작되고 끝난 시각, 악보

  let answer = "";

  // musicinfos는 100개 이하의 곡 정보를 담고 있는 배열??!!
  let first = musicinfos[0].split(",");
  let second = musicinfos[1].split(",");
  console.log(first);
  console.log(second);

  let firstTime = parseInt(first[1].slice(3)) - parseInt(first[0].slice(3));
  let secondTime = parseInt(second[1].slice(3)) - parseInt(second[0].slice(3));
  console.log(firstTime);
  console.log(secondTime);

  // let firstLen = first[3].length;
  // let secondLen = second[3].length;
  // console.log(firstLen)
  // console.log(secondLen)

  let firstStr = "";
  let secondStr = "";
  let sharp = ["C", "D", "F", "G", "A"];

  let idx = 0;
  let cnt = 0;
  while (cnt !== firstTime) {
    if (first[3][idx + 1] === "#" && sharp.indexOf(first[3][idx]) > -1) {
      firstStr += first[3][idx].toLowerCase();
      idx++;
    } else firstStr += first[3][idx];

    cnt++;
    idx++;

    if (first[3].length >= firstStr.length) idx = 0;
  }

  idx = 0;
  cnt = 0;
  while (cnt !== secondTime) {
    if (second[3][idx + 1] === "#" && sharp.indexOf(second[3][idx]) > -1) {
      secondStr += second[3][idx].toLowerCase();
      idx++;
    } else secondStr += second[3][idx];

    cnt++;
    idx++;

    if (second[3].length >= secondStr.length) idx = 0;
  }

  console.log(firstStr);
  console.log(secondStr);

  // C# -> c 로 변환
  const regex = /C#/i;
  firstStr.replace(regex, "c");
  secondStr.replace(regex, "c");
  console.log("first : ", firstStr);
  console.log("second : ", secondStr);

  let includesFirstMelody = firstStr.includes(m);
  let includesSecondMelody = secondStr.includes(m);
  console.log(includesFirstMelody);
  console.log(includesSecondMelody);

  return answer;
}
