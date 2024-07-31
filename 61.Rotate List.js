/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (!head) return head
  let fast = head
  let count = 0
  while (fast) {
    count++
    fast = fast.next
  }
  k = k % count
  let slow = head
  fast = head
  while (k--) {
    fast = fast.next
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  fast.next = head
  head = slow.next
  slow.next = null
  return head
};