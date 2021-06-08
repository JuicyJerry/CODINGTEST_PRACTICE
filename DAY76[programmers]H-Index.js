function solution(citations) {
  /*
        인용 횟수와 인용 횟수 이상인 요소의 개수 같아야한다. (x)
        
        => 전체 논문중 많이 인용된 순으로 정렬한 후, 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자
    */

  // 여기서 논문수가 왜 인덕스인거지?
  citations = citations.sort((a, b) => b - a);
  for (let j = 0; j < citations.length; j++) {
    if (citations[j] <= j) return j;
  }
  return citations.length;
}
