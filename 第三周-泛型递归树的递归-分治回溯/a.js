/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.length == 0 || !wordList.includes(endWord)) {
    return 0;
  }``
  // wordList.shift(beginWord)
  let queue = [] // 步数计算辅助
  queue.push(beginWord)
  let visited = []
  visited.push(beginWord)
  let step = 1
  while(queue.length > 0) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let currentWord = queue.shift()
      if (handleNext(queue, currentWord, endWord, visited, wordList)) { // 判断有下一个连接词-push到queue中/是endWord直接结束
        return step + 1
      }
    }
    step++ // 层层叠加
  }
  return 0
  function handleNext(queue, currentWord, endWord, visited, wordList) {
    let arr = currentWord.split('') // hot - dot
    for (let i = 0; i < endWord.length; i++) {
      let char = arr[i] // h
      for (let c = 0; c < 26; c++) {
        let j = String.fromCharCode(65+c).toLowerCase()
        if (char === j) continue
        arr[i] = j // a
        let newStr = arr.join('') // aot
        if (wordList.includes(newStr)) {
          if (newStr === endWord) return true
          if (!visited.includes(newStr)) {
            queue.push(newStr);
            // 注意：添加到队列以后，必须马上标记为已经访问
            visited.push(newStr)
          }
        }
      }
      // 复原
      arr[i] = char
    }
    return false
  }
  
};
