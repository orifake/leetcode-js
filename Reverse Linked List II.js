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
  let current = head, start = head, position = 1;

  while (position < left) {
    start = current
    current = current.next;
    position++;
  }

  let reversedList = null, tail = current;

  while (position >= left && position <= right) {
    const next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
    position++
  }

  start.next = reversedList;
  tail.next = current;

  return left > 1 ? head : reversedList
};