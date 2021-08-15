/**
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 解法1
 * 深度优先--递归真香
 * */
var inorderTraversal = function(root) {
  console.log('root:', root.val, root.right)
  const res = []
  const inorder = function(root) {
    if (!root) {
      return
    } else {
      inorder(root.left)
      res.push(root.val)
      inorder(root.right)
    }
  }
  inorder(root)
  return res
};


/**
 * 解法2
 * 广度优先--迭代
 * */








// ========================不禁让我想到了另一个题：104二叉树的最大深度
/**
 * 1.递归
 * 2.广度优先借助队列处理遍历数据
 * */
var maxDepth = function(root) {
  if(root === null) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

