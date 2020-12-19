function solution(participant, completion) {
    let answer = '';
    
    for (let j = 0; j < completion.length; j++) {
        let cnt = 0;
        for (let i = 0; i < participant.length; i++) {
            if (participant[i] === completion[j] && cnt === 0) {
                cnt++;
                participant.splice(i, 1);
            }
        } 
    }
    answer = participant[0];    
    return answer;
}

/* 
    선수 이름 배열과 완주 선수 이름 배열
    한 명 완주 못 한 선수 리턴하는 함수 작성
    
    수도 코드
    p = 참가자
    cp = completion.length
    cp.length = p.length - 1
    
    participant[i] 돌려보면서 completion[j] 비교
    
    
*/
