function solution(nums) {
    let answer = 0;
    const returnNum = nums.length / 2;
    
    /*
        0. num의 반의 폰켓몬을 골라야한다
        1. 중복제거
        2. 경우의 수 구하기
    */
    
    nums = nums.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
    
    return nums.length > returnNum ? returnNum : nums.length;
//     const getPermutations = function(arr, selectNumber) {
//         const results = [];
//         if (selectNumber === 1) return arr.map((value) => [value]);
        
//         arr.forEach((fixed, index, origin) => {
//             const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//             const permutations = getPermutations(rest,  selectNumber - 1);
//             const attached = permutations.map((permutation) => [fixed, ...permutation]);
//             results.push(...attached);
//         });
//         return results;
//     }

//     answer = getPermutations(nums, returnNum);
    
//     console.log(nums, returnNum);
    
//     let maxNum = nums[0].length;
//     answer.filter((el) => {
//         if(el.length > maxNum) maxNum = el.length;
//     })
}