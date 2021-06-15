//! #1
function solution(bridge_length, weight, truck_weights) {
  /*
        모든 트럭이 다리를 건너려면 최소 몇 초가 걸리나요?
        
        start loop(대기 트럭이 다리를 모두 건널 때까지): {
            bridge = []
            weigth 이하의 트럭(들) 무게를 견딜 수 있다.
            1초에 1씩 움직인다. ex) 길이가 2면 1초에 1씩 움직인다.
        }
        end loop
        return second;
    */
  let onBridge = [];
  let afterBridge = [];
  let second = 0;
  let bridgeCnt = 0;

  while (truck_weights.length) {
    second++;
    let onBridgeWeight = onBridge.reduce((acc, cur) => acc + cur, 0);
    let truck = truck_weights.splice(0, 1);

    if (bridgeCnt === bridge_length) {
      if (onBridgeWeight < weight && weight - onBridgeWeight >= truck) {
        onBridge.push(truck);
      }
      bridgeCnt = 0;
    }

    bridgeCnt++;
  }

  return second;
}

//! #2
function solution(bridge_length, weight, truck_weights) {
  /*
        모든 트럭이 다리를 건너려면 최소 몇 초가 걸리나요?

        start loop(대기 트럭이 다리를 모두 건널 때까지): {
            bridge = []
            weigth 이하의 트럭(들) 무게를 견딜 수 있다.
            1초에 1씩 움직인다. ex) 길이가 2면 1초에 1씩 움직인다.
        }
        end loop
        return second;
    */

  let bridge = [];
  let second = 0;
  let cnt = 0;
  let truck,
    flag = 0;

  while (truck_weights) {
    let bridgeWeight = bridge.reduce((acc, cur) => acc + cur, 0);

    if (weight - bridgeWeight >= truck) {
      bridge.push(truck);
    }

    if (flag === 0) {
      truck = truck_weights.shift();
    }

    if (second === bridge_length) {
      bridge.shift();
      second = 0;
      cnt++;
      flag = 0;
    }

    second++;
  }
  return 2 * cnt + second;
}

//! 잘 모르겠다...
