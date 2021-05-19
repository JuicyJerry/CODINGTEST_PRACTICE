function solution(m, musicinfos) {
  let m1 = musicinfos[0].split(",");
  let m2 = musicinfos[1].split(",");

  let m1Time = parseInt(m1[1].slice(3, 5)) - parseInt(m1[0].slice(3, 5));
  let m2Time = parseInt(m2[1].slice(3, 5)) - parseInt(m2[0].slice(3, 5));

  let m1Music = m1[3];
  let m2Music = m2[3];

  if (m1Music.length < m1Time) {
    let idx = 0;
    while (m1Music.length !== m1Time) {
      m1Music = m1Music + m1Music[idx];
      idx++;
    }
  }

  if (m2Music.length < m2Time) {
    let idx = 0;
    while (m2Music.length !== m2Time) {
      m2Music = m2Music + m2Music[idx];
      idx++;
    }
  }

  let m1MusicSplit = m1Music.split("");
  for (let i = 0; i < m1Music.length; i++) {
    if (m1MusicSplit[i] === "#") {
      m1MusicSplit.splice(i - 1, 2, m1MusicSplit[i - 1].toLowerCase());
    }
  }
  m1Music = m1MusicSplit.join("");

  let m2MusicSplit = m2Music.split("");
  for (let i = 0; i < m2Music.length; i++) {
    if (m2MusicSplit[i] === "#") {
      m2MusicSplit.splice(i - 1, 2, m2MusicSplit[i - 1].toLowerCase());
    }
  }
  m2Music = m2MusicSplit.join("");

  m = m.split("");
  for (let i = 0; i < m.length; i++) {
    if (m[i] === "#") {
      m.splice(i - 1, 2, m[i - 1].toLowerCase());
    }
  }
  m = m.join("");

  console.log(m, m1Music, m2Music);

  // let m1RegExp = new RegExp(m1Music, 'g');
  // let m2RegExp = new RegExp(m2Music, 'g');
  if (m1Music.match(m) && m2Music.match(m)) {
    if (m1Time === m2Time) {
      return m1[2];
    } else if (m1Time > m2Time) return m1[2];
    return m2[2];
  }

  if (m1Music.match(m)) return m1[2];
  else if (m2Music.match(m)) return m2[2];
  return "(None)";
}
