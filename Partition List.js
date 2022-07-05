/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  let frontDummy = new ListNode(0)
  let backDummy = new ListNode(0)
  let front = frontDummy
  let back = backDummy
  let curr = head
  while (curr) {
    if (curr.val < x) {
      front.next = curr
      front = front.next
    } else {
      back.next = curr
      back = back.next
    }
    curr = curr.next
  }
  front.next = backDummy.next
  back.next = null
  return frontDummy.next
};