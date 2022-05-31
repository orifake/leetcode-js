/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head) return false
  if (!head.next) return false
  let fast = head.next.next
  let slow = head.next
  while (fast !== slow) {
    if (!fast || fast.next) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
  }
  return true
};
