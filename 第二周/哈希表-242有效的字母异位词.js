/**
 * 解法1 先排序再比较
 * 用到
 *    [...]es6解构
 * 时间复杂度
 *    排序的时间复杂度是O(nlogn)
 *    字符串比较的时间复杂度O(n)
 * */
var isAnagram1 = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  return [...s].sort().join('') === [...t].sort().join('')
};
/**
 * 解法2
 * 哈希表
 * 用map
 * 时间复杂度O(n)
 * */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  var m = new Map()
  for(let i = 0; i < s.length; ++i) {
    // 用map的k-v计数每个元素的个数
    m.set(s[i], m.has(s[i]) ? m.get(s[i]) + 1 : 1)
  }
  console.log(m)
  for(let i = 0; i < t.length; ++i) {
    // 若t中压根没有事先存储在map中的s中元素，则直接返回false  s【a, b, c】t【a, d, e】
    if(!m.has(t[i])) {
      return false
    } else { // "aacc" "ccac" 遍历存在的元素并递减，如果减到小于零了那就说明比此元素s中比t中多
      m.set(t[i], m.get(t[i]) - 1)
      if(m.get(t[i]) < 0) {
        return false
      }
    }
  }
  return true
};

