/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 
 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

 示例 1：
 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 输出：3
 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */
// 时间复杂度O(N) 空间复杂度最差情况达到O(N)
// 回溯找 选优搜索法 搜索pq的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  if (root===null || root===q || root===p) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left === null) return right
  if (right === null) return left
  // 前提条件-pq一定存在于二叉树中(若不是如此遍历到root===q时便不能直接返回root)，先遍历在回溯遇到符合条件的就return，直到最后
  // 符合条件：遇到p返回p 遇到q返回q 遇到pq返回root
  return root
  
};
