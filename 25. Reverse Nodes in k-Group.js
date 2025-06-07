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
var reverseKGroup = function (head, k) {
  let slow = head
  let fast = head
  for (let i = 0; i < k; i++) {
    if (fast === null) return head;
    fast = fast.next;
  }
  let newHead = reverse(slow, fast);
  slow.next = reverseKGroup(fast, k);
  return newHead;
}

var reverse = function(head, tail) {
    let prev = new ListNode(0)
    let cur = head
    let next = cur
    while(cur !== tail) {
      next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    return prev;
};
