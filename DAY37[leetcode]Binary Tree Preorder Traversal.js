var preorderTraversal = function (root) {
  let ret = [];
  dfs(root);

  function dfs(root) {
    if (root !== null) {
      ret.push(root.val);
      dfs(root.left);
      dfs(root.right);
    }
  }
  return ret;
};
