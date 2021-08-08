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
