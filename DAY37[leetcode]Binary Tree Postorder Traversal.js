var postorderTraversal = function (root) {
  let ret = [];
  let dfs = function (root, res) {
    if (root) {
      dfs(root.left, ret);
      dfs(root.right, ret);
      ret.push(root.val);
    }
  };
  dfs(root, ret);
  return ret;
};
