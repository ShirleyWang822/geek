/***
 * 输入：nums = [2,7,11,15], target = 9
 输出：[0,1]
 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/two-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var twoSum = function(arr, sum) {
  const m = new Map()
  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i]
    if (m.has(target)) {
      const tIndex = m.get(target)
      return [tIndex, i]
    } else {
      m.set(arr[i], i)
    }
  }
};
module.exports = twoSum
