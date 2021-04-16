function solution(str1, str2) {
  let answer = 1;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < str1.length; i++) {
    let tmp = str1.slice(i, i + 2);
    if (tmp.search(/[^A-Z]/g) >= 0) {
      continue;
    }
    arr1.push(tmp);
  }

  for (let i = 0; i < str1.length; i++) {
    let tmp = str2.slice(i, i + 2);
    if (tmp.search(/[^A-Z]/g) >= 0) {
      continue;
    }
    arr2.push(tmp);
  }

  console.log(arr1, arr2);

  arr1.sort();
  arr2.sort();

  let a = [];
  let b = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      a.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    b.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    b.push(arr1[i]);
  }
  if (b.length === 0) return 65536;
  if (a.length === 0) return 0;
  return Math.floor((a.length / b.length) * 65536);
}
// 두 글자씩
// 다중집합

// 숫자, 특수 문자, 공백x
// 대소문자 차이 x

// 리턴값: 유사도 * 65536 (소수점 x)
