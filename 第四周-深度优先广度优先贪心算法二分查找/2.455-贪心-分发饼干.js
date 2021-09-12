/**
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 
 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 
  
 示例 1:
 
 输入: g = [1,2,3], s = [1,1]
 输出: 1
 解释:
 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 所以你应该输出1。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/assign-cookies
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findContentChildren = function(g, s) {
  // 典型的贪心，感觉贪心算法是一种是一种常识，能想到就想到想不到就想不到
  // 排好序后 先喂胃口大的小孩
  g = g.sort((a, b) => a-b)
  s = s.sort((a, b) => a-b)
  let count = 0
  let cookie = s.length - 1
  for (let i = g.length - 1; i >= 0; i--) {
    if (cookie >= 0 && s[cookie] >= g[i]) {
      count++
      cookie--
    }
  }
  return count
};
