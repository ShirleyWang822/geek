/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 输入：l1 = [1,2,4], l2 = [1,3,4]
 输出：[1,1,2,3,4,4]
 * */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 迭代解法 [1,2,3] [2,3,4] node保存了起始节点 pointer移动
  let node = new ListNode(-1)
  let pointer = node
  while(l1 !== null && l2 !== null) {s
    if (l1.val <= l2.val) {
      pointer.next = l1
      l1 = l1.next
    } else {
      pointer.next = l2
      l2 = l2.next
    }
    pointer = pointer.next
  }
  pointer.next = l1 === null ? l2 : l1
  return node.next
};
