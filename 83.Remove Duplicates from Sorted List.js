/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let slow = head
  while (slow) {
    let fast = slow.next
    while (fast && fast.val === slow.val) {
      fast = fast.next
    }
    // 删除重复节点
    slow.next = fast
    slow = fast
  }
  return head
};
