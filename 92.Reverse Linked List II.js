/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  let curr = head, start = head, position = 1;

  while (position < left) {
    start = curr
    curr = curr.next;
    position++;
  }

  let prev = null, tail = curr;

  while (position >= left && position <= right) {
    const next = current.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    position++
  }

  start.next = prev;
  tail.next = curr;

  return left > 1 ? head : prev
};