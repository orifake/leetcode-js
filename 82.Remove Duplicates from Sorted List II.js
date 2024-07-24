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
  let slow = dummy
  while (slow.next) {
    if (slow.next.next && slow.next.val === slow.next.next.val) {
      let fast = slow.next.next.next
      while (fast && fast.val === fast.next.val) {
        fast = fast.next
      }
      slow.next = fast
    } else {
      slow = slow.next
    }
  }
  return dummy.next
};