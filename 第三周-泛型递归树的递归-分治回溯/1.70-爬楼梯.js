/**
 * 爬楼梯
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 *
 * 思路：
 * 因为每次只能爬1或2个台阶爬上第n层就有可能是从第n-1层或者第n-2层爬上去的
 *
 * 时空复杂度：
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * */
var climbStairs = function(n) {
  let a = b = 1;
  for (let i = 0; i < n - 1; i++) {
    [a, b] = [b, a + b];
  }
  return b // return a的话要比return b多遍历一层
}
