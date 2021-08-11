var maxSlidingWindow = function(nums, k) {
  const w = [] // 递减队列
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    //[1, 3, 2, 4, 0, 1]
    // i   窗口         w(只留不超边界的递减值们) arr
    // i=0 [1,3,2]      [1]                  []
    // i=1 [3,2,4]      [3]                  []
    // i=2 [2,4,0]      [3,2]                [3]
    // i=3 [4,0,1]      [4]                  [3,4]
    while(w.length !== 0 && nums[i] > nums[w[w.length - 1]]) { // 队列最尾部的值一一直对比，只要比i位置的值小就pop出去
      w.pop()
    }
    w.push(i)
    if (w[0] <= i - k) {
      w.shift()
    }
    if (i + 1 >= k) {
      arr.push(nums[w[0]])
    }
  }
  return arr
};
