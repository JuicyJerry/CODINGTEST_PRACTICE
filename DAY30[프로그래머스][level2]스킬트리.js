function solution(skill, skill_trees) {
    let answer = 0;
    let idx = 0;
    let obj = {};
    
    for (let j = 0; j < skill_trees.length; j++) {
        for (let i = 0; i < skill.length; i++) {
            if (skill_trees[j].indexOf(skill[i]) > -1 && j === 0) {
                obj[i] = skill_trees[j].indexOf(skill[i]);
                // console.log(skill_trees[j].indexOf(skill[i]));
            } else if (skill_trees[j].indexOf(skill[i]) < obj[i]) {
                skill_trees.splice(j, 1);
                console.log("else")
                console.log(skill_trees)
                continue;
            }
        }
    }
    
    return skill_trees.length;
    
    // return answer;
}