function solution(str1, str2) {
  let universalSet1 = [];
  let universalSet2 = [];
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  for (let t = 0; t < str1.length; t++) {
    if (str1[t + 1] === undefined) break;
    if (
      str1[t].charCodeAt() >= 65 &&
      str1[t].charCodeAt() <= 90 &&
      str1[t + 1].charCodeAt() >= 65 &&
      str1[t + 1].charCodeAt() <= 90
    ) {
      // console.log('[if]', str1[t]);
      let setElement = str1[t].concat(str1[t + 1]);
      universalSet1.push(setElement);
    }
    continue;
  }

  for (let t = 0; t < str2.length; t++) {
    if (str2[t + 1] === undefined) break;
    if (
      str2[t].charCodeAt() >= 65 &&
      str2[t].charCodeAt() <= 90 &&
      str2[t + 1].charCodeAt() >= 65 &&
      str2[t + 1].charCodeAt() <= 90
    ) {
      // console.log('[if]', str2[t]);
      let setElement = str2[t].concat(str2[t + 1]);
      universalSet2.push(setElement);
    }
    continue;
  }

  // console.log(universalSet1, universalSet2);

  universalSet1.sort();
  universalSet2.sort();

  // console.log(universalSet1, universalSet2);

  //! Find array of All elments same
  let standard = universalSet1[0];
  let allElementsSame = true;

  for (let t = 1; t < universalSet2.length; t++) {
    if (standard !== universalSet2[t]) {
      allElementsSame = false;
      break;
    }
  }

  let similarity1 = 0;
  let similarity2 = 0;
  if (allElementsSame)
    similarity1 = getAllSameSetsSimilarity(universalSet1, universalSet2);
  else similarity2 = getNormalSetsSimilarity(universalSet1, universalSet2);

  if (similarity1 > similarity2) return Math.floor(similarity1 * 65536);
  return Math.floor(similarity2 * 65536);
}

//! normal
function getNormalSetsSimilarity(universalSet1, universalSet2) {
  // console.log('[normal]');

  let intersectionSets = [];
  for (let y = 0; y < universalSet1.length; y++) {
    for (let x = 0; x < universalSet2.length; x++) {
      //  && intersectionSets.indexOf(universalSet2[x])
      if (universalSet1[y] === universalSet2[x]) {
        intersectionSets.push(universalSet1[y]);
        break;
      }
      // continue;
    }
  }
  // console.log('intersectionSets: ', intersectionSets);

  let sumSets = [...universalSet1];
  for (let t = 0; t < universalSet2.length; t++) {
    if (sumSets.indexOf(universalSet2[t]) === -1)
      sumSets.push(universalSet2[t]);
  }
  // console.log('sumSets: ', sumSets);

  return intersectionSets.length / sumSets.length;
}

// !normal
function getAllSameSetsSimilarity(universalSet1, universalSet2) {
  // console.log('[unnormal]');
  if (universalSet1.length === 0 && universalSet2.length === 0) return 1;

  let intersectionSets, sumSets;
  if (universalSet1.length > universalSet2.length) {
    sumSets = universalSet1.length;
    intersectionSets = universalSet2.length;
  } else {
    sumSets = universalSet2.length;
    intersectionSets = universalSet1.length;
  }

  // console.log(intersectionSets, sumSets)

  return intersectionSets / sumSets;
}
