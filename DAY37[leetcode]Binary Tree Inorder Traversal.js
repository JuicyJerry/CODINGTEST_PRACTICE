var inorderTraversal = function (root) {
  let ret = [];
  dfs(root);

  function dfs(root) {
    if (root !== null) {
      dfs(root.left);
      ret.push(root.val);
      dfs(root.right);
    }
  }
  return ret;
};
