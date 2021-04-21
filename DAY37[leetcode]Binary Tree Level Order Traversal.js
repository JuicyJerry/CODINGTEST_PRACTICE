var levelOrder = function (root) {
  if (!root) return [];

  let curr = [],
    next = [root],
    traversal = [];

  while (next.length) {
    let level = [];
    curr = next;
    next = [];

    while (curr.length) {
      let node = curr.shift();
      level.push(node.val);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    traversal.push(level);
  }

  return traversal;
};
