//     const thirtyOne =  [1, 3, 5, 7, 8, 10, 12]; // 31일
//     const thirty = [4, 6, 9, 11]; // 30일
//     const january = [28, 29]; // 2월
function solution(a, b) {
  let answer = "";
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  // #1
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 0;
  for (let i = 0; i < a - 1; i++) {
    day += month[i];
  }
  day += b;
  answer = days[day % 7];

  // #2
  let dayOfWeek = days[new Date(`2016-0${a}-${b}`).getDay()];
  answer = dayOfWeek;
  return answer;
}
