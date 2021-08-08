/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123
 */
var plusOne = function(arr) {
  let carry = 1
  const length = arr.length
  for (let i = length - 1; i >=0; i--) {
    const sum = arr[i] + carry
    if (sum > 9) {
      carry = 1
      arr[i] = sum % 10
    } else {
      carry = 0
      arr[i] = sum
    }
  }
  if (carry === 1) {
    return [1, ...arr]
  }
  return arr
}
