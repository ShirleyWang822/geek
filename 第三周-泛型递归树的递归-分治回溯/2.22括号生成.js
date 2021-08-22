/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 有效括号组合需满足：左括号必须以正确的顺序闭合。示例 1：
 
 输入：n = 3
 输出：["((()))","(()())","(())()","()(())","()()()"]
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/generate-parentheses
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * 解法一：深度优先遍历 树递归 需要栈res累计返回结果
 *
 * */
var generateParenthesis = function(n) {
// 树深度优先遍历-stack动态计算返回值
// 1.terminator
  let res = []
  if (n === 0) {return res}
// current level logic
  curs('', 0, 0, n, res)

// drill down
  function curs(current, left, right, n, res) {
    if(right === n && left === n) {
      res.push(current)
      return
    }
    if (left < right) {
      return
    }
    if (left < n) {
      curs(current + '(', left + 1, right, n, res)
    }
    if (right < n) {
      curs(current + ')', left, right + 1, n, res)
    }
  }
  return res
};

/**
 * 深度优先联想到 回溯 动态规划
 * 回溯我理解是递归
 *  有重复字问题
 *  走不通返回走其他路径
 *
 * */

/**
 * 解法2：广度优先遍历
 * 队列就不定义了 拿数组模仿一个
 * */
var generateParenthesis = function(n) {
// 广度优先遍历
  const res = []
  const queue = []
  
  if (n === 0) return []
  queue.push({
    str: '',
    left: n,
    right: n
  })
  
  while (queue.length > 0) {
    const cur = queue.shift()
    const {str, left, right} = cur
    if (right === 0 && left === 0) {
      res.push(cur.str)
    }
    if (left > 0) {
      queue.push({str: str + '(', left: left - 1, right})
    }
    if (right > 0 && left < right) {
      queue.push({str: str + ')', left, right: right - 1})
    }
  }
  return res
}



/**
 * 这种思路的依据是什么
 * 为什么想到树
 * 生成括号有什么规律 或者说 生成括号有什么重复字问题 n对括号的生成=n-1对括号的生成+第n对括号生成方式
 * */
