/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  const dummy = new ListNode()
  dummy.next = head
  let node = dummy
  while (node.next) {
    if (node.next.next && node.next.val === node.next.next.val) {
      let nonValNode = node.next.next.next
      while (nonValNode && nonValNode.val === node.next.val) {
        nonValNode = nonValNode.next
      }
      node.next = nonValNode
    } else {
      node = node.next
    }
  }
  return dummy.next
};