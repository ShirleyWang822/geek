/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
 * 拆拆拆 pow(x,n) = pow(x, n/2) * pow(x, n/2)
 * */

var myPow = function(x, n) {
  let res = n >= 0 ? pow(x, n) : 1.0 / pow(x, -n)
  function pow(x, n) {
    // terminator
    if (n === 0) {
      return 1.0
    }
    // subproblem
    let subresult = pow(x, Math.floor(n/2))
    // merge
    return n % 2 === 0 ? subresult * subresult : subresult * subresult * x
    
  }
  return res
};
