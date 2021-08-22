/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 你可以按 任何顺序 返回答案。
 */
var combine = function(n, k) {
  let res = []
  let path = []
  if (k <= 0 || n < k) {return res}
  dfs(n, k, 1, path)
  return res
  function dfs(n, k, begin, path1) {
    let path = JSON.parse(JSON.stringify(path1)) // 引用赋值会导致结果错误
    if (path.length == k) {
      res.push(path)
      return
    }
    for (let i = begin; i <= n; i++) {
      path.push(i)
      dfs(n, k, i + 1, path)
      path.pop()
    }
  }
};
