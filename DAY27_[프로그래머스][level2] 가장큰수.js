function solution(numbers) {
  let answer = "";
  let numToStr = numbers.join(",").split(",");

  numToStr.sort((a, b) => {
    return a - b;
  });
  console.log(numToStr);

  let idx = 0;
  let target = "";

  while (idx < 10) {
    let biggest = getBigNum(numToStr);
    console.log("biggest: " + biggest);
    console.log("numToStr[idx]: " + numToStr[idx]);

    if (numToStr.length === 1) {
      target += numToStr[0];
      numToStr.splice(0, 1);
      break;
    }

    let search = numToStr.indexOf(biggest);
    console.log("search: " + search);
    console.log("idx: " + idx);
    console.log("numToStr: " + numToStr + "\n\n");

    if (search > -1) {
      target += numToStr[search];
      numToStr.splice(search, 1);
      console.log("target: " + target);
    }
    idx++;
  }
  return target;
}

function getBigNum(numbers) {
  let max = -2;
  let arr = [];

  if (numbers.length === 1) return numbers;

  for (let el of numbers) {
    if (el > max) {
      if (el[1] !== "0" && numbers.length === 2) {
        max = el;
        return max;
      }
      max = el;
      console.log("el : " + el);
      console.log("max : " + max);
    }
  }
  // console.log("arr: " + arr);
  // console.log("max: " + max);
  return max;
}
