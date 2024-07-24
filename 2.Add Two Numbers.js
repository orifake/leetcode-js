/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(null)
  let curr = dummy
  let carry = 0
  while (l1 || l2) {
    let val = carry
    if (l1) {
      val += l1.val
      l1 = l1.next
    }
    if (l2) {
      val += l2.val
      l2 = l2.next
    }
    carry = ~~(val / 10)
    val = val % 10
    curr.next = new ListNode(val)
    curr = curr.next

    if (carry) {
      curr.next = new ListNode(1)
    }
  }
  return dummy.next
};