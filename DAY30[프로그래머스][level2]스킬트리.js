function solution(skill, skill_trees) {
  let answer = 0;
  let idx = 0;
  let obj = {};
  let prev = -1;

  for (let j = 0; j < skill_trees.length; j++) {
    for (let i = 0; i < skill.length; i++) {
      if (skill_trees[j].indexOf(skill[i]) > -1 && j === 0) {
        prev = skill_trees[j].indexOf(skill[i]);
        // console.log(skill_trees[j].indexOf(skill[i]));
        console.log(prev);
      } else {
        if (skill_trees[j].indexOf(skill[i]) > prev) skill_trees.splice(j, 1);
        continue;
      }
    }
  }

  return skill_trees.length;

  // return answer;
}
