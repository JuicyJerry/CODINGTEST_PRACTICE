function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let in_bridge = [];
  let out_bridge = [];
  let len_time = 0;
  const trucks_num = truck_weights.length;
  let sum = 0;

  while (1) {
    // 1초씩 증가
    time++;
    len_time++;

    if (len_time === 1 && weight - in_bridge[0] >= truck_weights[1]) {
      in_bridge.push(truck_weights[0]);
      truck_weights.shift();
    }

    if (len_time === bridge_length) {
      out_bridge.push(in_bridge[0]);
      in_bridge.shift();
      len_time = 0;
      sum = 0;
    }

    // 다리 건너기
    for (let el of in_bridge) {
      sum += in_bridge[el];
    }

    if (weight - sum >= truck_weights[0] || !in_bridge.length) {
      in_bridge.push(truck_weights[0]);
      truck_weights.shift();
    }

    if (out_bridge.length === trucks_num) return time;
  }
}
