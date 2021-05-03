function solution(m, musicinfos) {
  let answer = "";
  // len = musicinfos[1] - musicinfos[0] (재생 시간)
  // console.log(musicinfos[0].split(', ').map(e => console.log(e)));
  // console.log(musicinfos[0]);
  // console.log(parseInt(answer.concat(musicinfos[0].split(', ')).slice(3,5)));
  // console.log(parseInt(answer.concat(musicinfos[0].split(', ')).slice(9, 11)));

  let len1 =
    parseInt(answer.concat(musicinfos[0].split(", ")).slice(9, 11)) -
    parseInt(answer.concat(musicinfos[0].split(", ")).slice(3, 5));

  let len2 =
    parseInt(answer.concat(musicinfos[1].split(", ")).slice(9, 11)) -
    parseInt(answer.concat(musicinfos[1].split(", ")).slice(3, 5));

  // 재생 시간만큼 탐색 및 악보정보끼리 합친다
  let info1 = musicinfos[0].split(", ")[0].split(",")[3];
  let info2 = musicinfos[1].split(", ")[0].split(",")[3];

  // console.log(info1, info2);
  // console.log(musicinfos[0].split(', ')[0].split(',')[2]);
  // console.log(musicinfos[0].split(', ')[0].split(',')[3]);

  let str1 = "";
  for (let i = 0; i < len1; i++) str1 += info1;
  // for (let i = 0; i < len1; i++) str1 += info1[i];
  let str2 = "";
  for (let i = 0; i < len2; i++) str2 += info2;
  // for (let i = 0; i < len2; i++) str2 += info2[i];

  console.log(str1, "\n", str2);

  // 멜로디가 있는지 확인함
  // console.log(str1.includes(m));
  // console.log(str2.includes(m));
  let isExistedInStr1 = str1.includes(m);
  let isExistedInStr2 = str2.includes(m);

  console.log(isExistedInStr1);
  console.log(isExistedInStr2);
  // 존재시, 해당 음악 제목 리턴

  let title1 = musicinfos[0].split(", ")[0].split(",")[2];
  let title2 = musicinfos[1].split(", ")[0].split(",")[2];

  console.log(title1);
  console.log(title2);

  // 존재하지만, 멜로디가 중복되며, 재생 시간도 같다면, 먼저 입력된 곡을 리턴
  if (isExistedInStr1 && isExistedInStr2 && info1 === info2) {
    return title1;
  }

  // 존재하지만, 멜로디가 중복될 경우, 재생 기간이 긴 곡을 리턴
  else if (isExistedInStr1 || isExistedInStr2) {
    if (isExistedInStr1) return title1;
    return title2;
    // if (info1 - info2 > 0) return title1;
    // return title2;
  }

  // 존재 하지 않다면, None을 리턴
  else return "None";

  //! 설명에서 길이가 왜 7분이라고 나오는거지?
}
