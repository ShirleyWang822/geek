/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const m = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  const stack = []
  for (var i of s) {
    if (m.has(i)) {
      stack.push(i)
    } else if(m.get(stack.pop()) !== i) {
      return false
    }
  }
  return stack.length === 0
};
