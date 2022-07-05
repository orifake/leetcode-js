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
  let fast = head
  let slow = head
  while (fast && fast.next) {
    // 快慢指针相遇，说明含有环
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      return true;
    }
  }
  return false
};
